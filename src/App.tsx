import { useEffect, useState } from "preact/hooks";
import type { User } from "firebase/auth";
import type { ThemeSettings } from "./types";
import { listenToAuthChanges } from "./services/authService";
import {
  defaultTheme,
  getCloudTheme,
  saveCloudTheme,
} from "./services/themeService";
import { Login } from "./components/Login";
import { MainScreen } from "./components/MainScreen";
import { TopMenu } from "./components/TopMenu";
import { DynamicBackground } from "./components/DynamicBackground";

const THEME_CACHE_KEY = "movie_journal_last_theme";

function getCachedTheme(): ThemeSettings {
  try {
    const raw = localStorage.getItem(THEME_CACHE_KEY);
    return raw ? JSON.parse(raw) : defaultTheme;
  } catch {
    return defaultTheme;
  }
}

function cacheTheme(theme: ThemeSettings) {
  localStorage.setItem(THEME_CACHE_KEY, JSON.stringify(theme));
}

function applyThemeToDocument(theme: ThemeSettings) {
  document.documentElement.setAttribute("data-theme", theme.mode);

  document.documentElement.style.setProperty(
    "--accent-color",
    theme.accentColor
  );

  document.documentElement.style.setProperty(
    "--button-color",
    theme.buttonColor
  );

  document.documentElement.style.setProperty(
    "--outline-color",
    theme.outlineColor
  );
}

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Important: use cached theme first, not defaultTheme.
  const [theme, setTheme] = useState<ThemeSettings>(() => getCachedTheme());

  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    applyThemeToDocument(theme);

    // Only cache real logged-in user themes.
    // This prevents the login/default theme from overwriting the last nice one.
    if (currentUser) {
      cacheTheme(theme);
    }
  }, [theme, currentUser]);

  useEffect(() => {
    const unsubscribe = listenToAuthChanges(async (user) => {
      setAuthLoading(true);
      setThemeLoaded(false);

      try {
        if (user) {
          const savedTheme = await getCloudTheme(user.uid);

          applyThemeToDocument(savedTheme);
          setTheme(savedTheme);
          setCurrentUser(user);
          setThemeLoaded(true);
        } else {
          setCurrentUser(null);
          setTheme(defaultTheme);
          setThemeLoaded(false);
          applyThemeToDocument(defaultTheme);
        }
      } catch (error) {
        console.error("Auth/theme loading error:", error);

        setCurrentUser(user);

        if (user) {
          setTheme(getCachedTheme());
          setThemeLoaded(true);
        } else {
          setTheme(defaultTheme);
          setThemeLoaded(false);
        }
      } finally {
        setAuthLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!currentUser || !themeLoaded) return;

    saveCloudTheme(currentUser.uid, theme).catch((error) => {
      console.error("Theme save error:", error);
    });
  }, [theme, currentUser, themeLoaded]);

  if (authLoading) {
    return (
      <div className="relative flex h-screen w-screen items-center justify-center">
        <DynamicBackground />

        <svg
          aria-hidden="true"
          className="h-12 w-12 animate-spin text-[var(--muted-color)] fill-[var(--outline-color)]"
          viewBox="0 0 100 101"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />

          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>

        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="app">
      <DynamicBackground />

      {currentUser && <TopMenu theme={theme} onThemeChange={setTheme} />}

      {!currentUser ? <Login /> : <MainScreen user={currentUser} />}
    </div>
  );
}