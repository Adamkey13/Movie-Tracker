import type { ThemeSettings, User, WatchEntry } from "../types";

const USERS_KEY = "movie_journal_users";
const CURRENT_USER_KEY = "movie_journal_current_user";

function getEntryKey(username: string) {
  return `movie_journal_entries_${username.toLowerCase()}`;
}

function getThemeKey(username: string) {
  return `movie_journal_theme_${username.toLowerCase()}`;
}

export const defaultTheme: ThemeSettings = {
  mode: "dark",
  accentColor: "#f5c542",
  buttonColor: "#e63946",
  outlineColor: "#f5c542",
};

export function getUsers(): User[] {
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveUsers(users: User[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function registerUser(username: string, password: string) {
  const users = getUsers();

  const alreadyExists = users.some(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  );

  if (alreadyExists) {
    return {
      success: false,
      message: "This username already exists.",
    };
  }

  const newUser: User = { username, password };

  saveUsers([...users, newUser]);
  setCurrentUser(username);

  saveTheme(username, defaultTheme);

  return {
    success: true,
    message: "Account created successfully.",
    username,
  };
}

export function loginUser(username: string, password: string) {
  const users = getUsers();

  const user = users.find(
    (u) =>
      u.username.toLowerCase() === username.toLowerCase() &&
      u.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Wrong username or password.",
    };
  }

  setCurrentUser(user.username);

  return {
    success: true,
    message: "Logged in successfully.",
    username: user.username,
  };
}

export function setCurrentUser(username: string) {
  localStorage.setItem(CURRENT_USER_KEY, username);
}

export function getCurrentUser() {
  return localStorage.getItem(CURRENT_USER_KEY);
}

export function logoutUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

export function getEntries(username: string): WatchEntry[] {
  const raw = localStorage.getItem(getEntryKey(username));
  return raw ? JSON.parse(raw) : [];
}

export function saveEntries(username: string, entries: WatchEntry[]) {
  localStorage.setItem(getEntryKey(username), JSON.stringify(entries));
}

export function getTheme(username: string | null): ThemeSettings {
  if (!username) {
    return defaultTheme;
  }

  const raw = localStorage.getItem(getThemeKey(username));
  return raw ? JSON.parse(raw) : defaultTheme;
}

export function saveTheme(username: string | null, theme: ThemeSettings) {
  if (!username) return;

  localStorage.setItem(getThemeKey(username), JSON.stringify(theme));
}