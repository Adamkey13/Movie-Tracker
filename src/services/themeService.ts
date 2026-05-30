import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import type { ThemeSettings } from "../types";

export const defaultTheme: ThemeSettings = {
  mode: "dark",
  accentColor: "#ffdc52",
  buttonColor: "#fbd86e",
  outlineColor: "#ffdc40",
};

export async function getCloudTheme(uid: string): Promise<ThemeSettings> {
  const themeRef = doc(db, "users", uid, "settings", "theme");
  const snapShot = await getDoc(themeRef);

  if (!snapShot.exists()) {
    return defaultTheme;
  }

  return snapShot.data() as ThemeSettings;
}

export async function saveCloudTheme(uid: string, theme: ThemeSettings) {
  const themeRef = doc(db, "users", uid, "settings", "theme");
  await setDoc(themeRef, theme);
}