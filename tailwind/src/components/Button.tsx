import React from "react";
import { ButtonProps } from "../types/calculator.types";
import { useTheme } from "../contexts/ThemeContext";

const Button: React.FC<ButtonProps> = ({
  value,
  onClick,
  type = "number",
  className = "",
  disabled = false,
}) => {
  const { theme } = useTheme();

  const getButtonStyles = () => {
    const baseStyles = `
      w-full h-14 rounded-2xl font-medium text-lg transition-all duration-200 
      transform active:scale-95 backdrop-blur-md border border-opacity-20
      disabled:opacity-50 disabled:cursor-not-allowed
      hover:scale-105 active:animate-press
    `;

    const themeStyles = {
      dark: {
        number: `
          bg-gray-800/40 hover:bg-gray-700/50 text-white border-white/10
          shadow-lg hover:shadow-xl
        `,
        operator: `
          bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500
          text-white border-orange-400/20 shadow-lg hover:shadow-xl shadow-orange-500/25
        `,
        utility: `
          bg-gray-600/40 hover:bg-gray-500/50 text-white border-white/10
          shadow-lg hover:shadow-xl
        `,
        equals: `
          bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500
          text-white border-orange-400/20 shadow-lg hover:shadow-xl shadow-orange-500/25
        `,
      },
      light: {
        number: `
          bg-white/60 hover:bg-white/80 text-gray-800 border-white/30
          shadow-lg hover:shadow-xl
        `,
        operator: `
          bg-gradient-to-br from-orange-400 to-orange-500 hover:from-orange-300 hover:to-orange-400
          text-white border-orange-300/20 shadow-lg hover:shadow-xl shadow-orange-400/25
        `,
        utility: `
          bg-gray-200/60 hover:bg-gray-200/80 text-gray-700 border-white/30
          shadow-lg hover:shadow-xl
        `,
        equals: `
          bg-gradient-to-br from-orange-400 to-orange-500 hover:from-orange-300 hover:to-orange-400
          text-white border-orange-300/20 shadow-lg hover:shadow-xl shadow-orange-400/25
        `,
      },
    };

    return `${baseStyles} ${themeStyles[theme][type]} ${className}`;
  };

  const handleClick = () => {
    if (!disabled) {
      onClick(value);
    }
  };

  return (
    <button
      className={getButtonStyles()}
      onClick={handleClick}
      disabled={disabled}
      type="button">
      {value}
    </button>
  );
};

export default Button;
