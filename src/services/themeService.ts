import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import type { ThemeSettings } from "../types";

export const defaultTheme: ThemeSettings = {
  mode: "dark",
  accentColor: "#386641",
  buttonColor: "#6a994e",
  outlineColor: "#a7c957",
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