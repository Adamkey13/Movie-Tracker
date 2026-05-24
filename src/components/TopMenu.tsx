import { useState } from "preact/hooks";
import type { ThemeSettings, ThemeMode } from "../types";
import "../styles/TopMenu.css";

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
    <div className="top-menu-wrapper">
      <button className="menu-button" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {open && (
        <div className="top-menu">
          <h3>Customize</h3>

          <label>
            Theme
            <select
              value={theme.mode}
              onChange={(e) => updateThemeMode(e.currentTarget.value as ThemeMode)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="cinema">Cinema</option>
            </select>
          </label>

          <label>
            Accent color
            <input
              type="color"
              value={theme.accentColor}
              onChange={(e) => updateColor("accentColor", e.currentTarget.value)}
            />
          </label>

          <label>
            Button color
            <input
              type="color"
              value={theme.buttonColor}
              onChange={(e) => updateColor("buttonColor", e.currentTarget.value)}
            />
          </label>

          <label>
            Outline color
            <input
              type="color"
              value={theme.outlineColor}
              onChange={(e) => updateColor("outlineColor", e.currentTarget.value)}
            />
          </label>
        </div>
      )}
    </div>
  );
}