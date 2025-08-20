import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { addCommas } from "../utils/calculator.utils";

interface DisplayProps {
  value: string;
  operation?: string | null;
  previousValue?: string | null;
}

const Display: React.FC<DisplayProps> = ({
  value,
  operation,
  previousValue,
}) => {
  const { theme } = useTheme();

  const formatDisplayValue = (val: string): string => {
    if (val === "Error") return val;

    // Don't format if it contains a decimal point being typed
    if (val.endsWith(".")) return val;

    // Check if it's a number and format with commas
    const num = parseFloat(val);
    if (!isNaN(num)) {
      return addCommas(val);
    }

    return val;
  };

  const getDisplayStyles = () => {
    const baseStyles = `
      w-full p-6 rounded-3xl backdrop-blur-md border border-opacity-20
      transition-all duration-300
    `;

    const themeStyles = {
      dark: `
        bg-gray-800/30 border-white/10 text-white
        shadow-lg shadow-black/20
      `,
      light: `
        bg-white/40 border-white/30 text-gray-800
        shadow-lg shadow-black/10
      `,
    };

    return `${baseStyles} ${themeStyles[theme]}`;
  };

  return (
    <div className={getDisplayStyles()}>
      {/* Previous calculation display */}
      {previousValue && operation && (
        <div
          className={`text-sm opacity-60 mb-1 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
          {formatDisplayValue(previousValue)} {operation}
        </div>
      )}

      {/* Main display */}
      <div className="text-right">
        <div className="text-4xl md:text-5xl font-light tracking-tight leading-none">
          {formatDisplayValue(value)}
        </div>
      </div>
    </div>
  );
};

export default Display;
