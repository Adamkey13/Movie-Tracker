import { useState } from "preact/hooks";
import type { ThemeMode, ThemeSettings } from "../types";
import { defaultTheme } from "../services/themeService";
import { ModalSelect } from "./ModalSelect";

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

  function resetColors() {
    onThemeChange({
      ...theme,
      accentColor: defaultTheme.accentColor,
      buttonColor: defaultTheme.buttonColor,
      outlineColor: defaultTheme.outlineColor,
    });
  }

  const themeOptions: { value: ThemeMode; label: string }[] = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "cinema", label: "Cinema" },
  ];

  return (
    <div className="fixed right-4 top-4 z-50">
      <button
        className="cursor-pointer grid h-11 w-11 place-items-center rounded-full border border-[var(--outline-color)] bg-[var(--button-color)] text-lg font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && (
        <div className="absolute right-0 top-14 grid w-64 gap-4 rounded-[22px] border border-[var(--outline-color)] bg-[var(--card-color)] p-4 text-[var(--text-color)] shadow-2xl pt-6 pb-7">
          <h3 className="m-0 text-lg font-bold">Customize</h3>

          <ModalSelect
            label="Theme"
            value={theme.mode}
            options={themeOptions}
            onChange={updateThemeMode}
          />

          <label className="grid gap-2 text-sm text-[var(--muted-color)]">
            Accent color
            <button className="relative h-10 w-full bg-[var(--accent-color)] rounded-full">
              <input
                className="absolute inset-0 h-11 w-full cursor-pointer opacity-0"
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
            <button className="relative h-10 w-full bg-[var(--button-color)] rounded-full">
              <input
                className="absolute inset-0 h-11 w-full cursor-pointer opacity-0"
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
            <button className="relative h-10 w-full bg-[var(--outline-color)] rounded-full">
              <input
                className="absolute inset-0 h-[100%] w-full cursor-pointer opacity-0"
                type="color"
                value={theme.outlineColor}
                onInput={(e) =>
                  updateColor("outlineColor", (e.target as HTMLInputElement).value)
                }
              />
            </button>
          </label>

          <button
            className="cursor-pointer rounded-full border border-[var(--outline-color)] bg-transparent px-4 py-3 font-black text-[var(--text-color)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--outline-color)_18%,transparent)]"
            onClick={resetColors}
          >
            Reset colors
          </button>
        </div>
      )}
    </div>
  );
}