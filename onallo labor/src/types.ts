export type MediaType = "movie" | "series";

export type WatchStatus = "watched" | "watching" | "want-to-watch";

export type ThemeMode = "light" | "dark" | "cinema";

export type User = {
  username: string;
  password: string;
};

export type ThemeSettings = {
  mode: ThemeMode;
  accentColor: string;
  buttonColor: string;
  outlineColor: string;
};

export type WatchEntry = {
  id: string;
  type: MediaType;
  picture: string;
  name: string;
  rating: number;
  review: string;
  category: string;
  status: WatchStatus;
  progress: string;
  whereToWatch: string;
  createdAt: string;
  updatedAt: string;
};