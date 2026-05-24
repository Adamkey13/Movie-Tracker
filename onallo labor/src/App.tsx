import { useEffect, useState } from "preact/hooks";
import type { ThemeSettings } from "./types";
import {
  defaultTheme,
  getCurrentUser,
  getTheme,
  saveTheme,
} from "./utils/storage";
import { Login } from "./components/Login";
import { MainScreen } from "./components/MainScreen";
import { TopMenu } from "./components/TopMenu";

export default function App() {
  const savedUser = getCurrentUser();

  const [currentUser, setCurrentUser] = useState<string | null>(savedUser);
  const [theme, setTheme] = useState<ThemeSettings>(getTheme(savedUser));

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme.mode);
    document.documentElement.style.setProperty("--accent-color", theme.accentColor);
    document.documentElement.style.setProperty("--button-color", theme.buttonColor);
    document.documentElement.style.setProperty("--outline-color", theme.outlineColor);

    saveTheme(currentUser, theme);
  }, [theme, currentUser]);

  function handleLoginSuccess(username: string) {
    setCurrentUser(username);
    setTheme(getTheme(username));
  }

  function handleLogout() {
    setCurrentUser(null);
  }

  return (
    <div className="app">


      {!currentUser ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <div>
          <TopMenu theme={theme} onThemeChange={setTheme} />
          <MainScreen username={currentUser} onLogout={handleLogout} />
        </div>

      )}
    </div>
  );
}