import { Moon, Sun } from "lucide-react";
import { useState } from "react";

type Theme = "light" | "dark";
const current = (): Theme => (document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark");

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(current);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="grid h-9 w-9 place-items-center rounded-full border-2 border-fg/30 text-fg transition-colors duration-200 hover:border-brand hover:text-brand md:h-11 md:w-11"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
