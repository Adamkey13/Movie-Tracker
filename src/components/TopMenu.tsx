import { useState } from "preact/hooks";
import type { ThemeMode, ThemeSettings } from "../types";

type TopMenuProps = {
  theme: ThemeSettings;
  onThemeChange: (theme: ThemeSettings) => void;
};

export function TopMenu({ theme, onThemeChange }: TopMenuProps) {
  const [open, setOpen] = useState(false);

  function updateThemeMode(mode: ThemeMode) {
    onThemeChange({ ...theme, mode });
  }

  function updateColor(key: keyof ThemeSettings, value: string) {
    onThemeChange({ ...theme, [key]: value });
  }

  return (
    <div className="fixed right-4 top-4 z-50">
      <button
        className="grid h-11 w-11 place-items-center rounded-full border border-[var(--outline-color)] bg-[var(--button-color)] text-lg font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && (
        <div className="absolute right-0 top-14 grid w-64 gap-4 rounded-[22px] border border-[var(--outline-color)] bg-[var(--card-color)] p-4 text-[var(--text-color)] shadow-2xl">
          <h3 className="m-0 text-lg font-bold">Customize</h3>

          <label className="grid gap-2 text-sm text-[var(--muted-color)]">
            Theme
            <select
              className="rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] p-3 text-[var(--text-color)] outline-none"
              value={theme.mode}
              onInput={(e) =>
                updateThemeMode((e.target as HTMLSelectElement).value as ThemeMode)
              }
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="cinema">Cinema</option>
            </select>
          </label>

          <label className="grid gap-2 text-sm text-[var(--muted-color)]">
            Accent color
            <button className="h-10 w-[100%] bg-[var(--accent-color)] rounded-full">
              <input
                className="h-11 opacity-0"
                type="color"
                value={theme.accentColor}
                onInput={(e) =>
                  updateColor("accentColor", (e.target as HTMLInputElement).value)
                }
              />
            </button>
          </label>

          <label className="grid gap-2 text-sm text-[var(--muted-color)]">
            Button color
            <button className="h-10 w-[100%] bg-[var(--button-color)] rounded-full">
            <input
              className="h-11 opacity-0"
              type="color"
              value={theme.buttonColor}
              onInput={(e) =>
                updateColor("buttonColor", (e.target as HTMLInputElement).value)
              }
            />
            </button>
          </label>

          <label className="grid gap-2 text-sm text-[var(--muted-color)]">
            Outline color
            <button className="h-10 w-[100%] bg-[var(--outline-color)] rounded-full">
              <input
                className="h-11 opacity-0"
                type="color"
                value={theme.outlineColor}
                onInput={(e) =>
                  updateColor("outlineColor", (e.target as HTMLInputElement).value)
                }
              />
            </button>
          </label>
        </div>
      )}
    </div>
  );
}