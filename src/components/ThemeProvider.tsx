"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode, type CSSProperties } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({
  theme: "light",
  toggle: () => { },
});

/* Dark palette — set as inline CSS variables so EVERY Tailwind utility
   that references --color-* automatically picks up the dark values. */
const darkVars: CSSProperties & Record<string, string> = {
  "--color-bg": "#162b1e",
  "--color-surface": "rgba(26, 55, 38, 0.7)",
  "--color-surface-solid": "#1c3726",
  "--color-ink": "#f0f7f2",
  "--color-muted": "#b0ccb8",
  "--color-line": "#2a5e3c",
  "--color-accent": "#5ee89a",
  "--color-accent-hover": "#7df0b0",
  "--color-accent-light": "rgba(94, 232, 154, 0.1)",
  "--color-accent-glow": "rgba(94, 232, 154, 0.15)",
  "--color-warm": "rgba(36, 80, 52, 0.5)",
  "--color-warm-deep": "rgba(36, 80, 52, 0.7)",
  background: "#162b1e",
  color: "#f0f7f2",
  minHeight: "100vh",
  transition: "background 0.6s ease, color 0.6s ease",
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }, []);

  const isDark = theme === "dark";

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div
        className={isDark ? "dark-theme" : ""}
        style={isDark ? darkVars : { minHeight: "100vh", transition: "background 0.6s ease, color 0.6s ease" }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
