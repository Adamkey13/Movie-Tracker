import { useEffect, useState } from "preact/hooks";
import type { User } from "firebase/auth";
import type { ThemeSettings } from "./types";
import { listenToAuthChanges } from "./services/authService";
import { defaultTheme, getCloudTheme, saveCloudTheme } from "./services/themeService";
import { Login } from "./components/Login";
import { MainScreen } from "./components/MainScreen";
import { TopMenu } from "./components/TopMenu";
import { DynamicBackground } from "./components/DynamicBackground";

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [theme, setTheme] = useState<ThemeSettings>(defaultTheme);

  useEffect(() => {
    const unsubscribe = listenToAuthChanges(async (user) => {
      try {
        setCurrentUser(user);

        if (user) {
          const savedTheme = await getCloudTheme(user.uid);
          setTheme(savedTheme);
        } else {
          setTheme(defaultTheme);
        }
      } catch (error) {
        console.error("Auth/theme loading error:", error);
        setTheme(defaultTheme);
      } finally {
        setAuthLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme.mode);
    document.documentElement.style.setProperty("--accent-color", theme.accentColor);
    document.documentElement.style.setProperty("--button-color", theme.buttonColor);
    document.documentElement.style.setProperty("--outline-color", theme.outlineColor);

    if (currentUser) {
      saveCloudTheme(currentUser.uid, theme);
    }
  }, [theme, currentUser]);

  if (authLoading) {
    return <div className="app">Loading...</div>;
  }

  return (
    <div className="app">
      <DynamicBackground />

      {!currentUser ? (
        <Login />
      ) : (
        <div>
          <TopMenu theme={theme} onThemeChange={setTheme} />
          <MainScreen user={currentUser} />
        </div>
      )}
    </div>
  );
}