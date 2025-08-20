import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="absolute top-4 right-4 z-10">
      <button
        onClick={toggleTheme}
        className={`
          px-4 py-2 rounded-full backdrop-blur-md border border-opacity-20
          transition-all duration-300 hover:scale-105 active:scale-95
          ${
            theme === "dark"
              ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
              : "bg-black/10 border-black/20 text-gray-800 hover:bg-black/20"
          }
        `}
        type="button">
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default ThemeToggle;
