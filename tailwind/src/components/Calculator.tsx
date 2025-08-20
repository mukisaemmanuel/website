import React from "react";
import { useCalculator } from "../hooks/useCalculator";
import { useTheme } from "../contexts/ThemeContext";
import Display from "./Display";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

const Calculator: React.FC = () => {
  const {
    state,
    handleNumberClick,
    handleOperatorClick,
    handleUtilityClick,
    handleEqualsClick,
  } = useCalculator();

  const { theme } = useTheme();

  const buttonLayout = [
    [
      { value: "C", type: "utility" as const },
      { value: "+/-", type: "utility" as const },
      { value: "%", type: "utility" as const },
      { value: "÷", type: "operator" as const },
    ],
    [
      { value: "7", type: "number" as const },
      { value: "8", type: "number" as const },
      { value: "9", type: "number" as const },
      { value: "×", type: "operator" as const },
    ],
    [
      { value: "4", type: "number" as const },
      { value: "5", type: "number" as const },
      { value: "6", type: "number" as const },
      { value: "-", type: "operator" as const },
    ],
    [
      { value: "1", type: "number" as const },
      { value: "2", type: "number" as const },
      { value: "3", type: "number" as const },
      { value: "+", type: "operator" as const },
    ],
    [
      { value: "0", type: "number" as const, span: 2 },
      { value: ".", type: "number" as const },
      { value: "=", type: "equals" as const },
    ],
  ];

  const handleButtonClick = (value: string, type: string) => {
    switch (type) {
      case "number":
        handleNumberClick(value);
        break;
      case "operator":
        handleOperatorClick(value as any);
        break;
      case "utility":
        handleUtilityClick(value);
        break;
      case "equals":
        handleEqualsClick();
        break;
    }
  };

  const getBackgroundStyles = () => {
    const baseStyles = "min-h-screen transition-all duration-500";

    const backgrounds = {
      dark: "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900",
      light: "bg-black",
    };

    return `${baseStyles} ${backgrounds[theme]}`;
  };

  return (
    <div className={getBackgroundStyles()}>
      <ThemeToggle />

      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-sm mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1
              className={`text-2xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}>
              CALCULATOR APP
            </h1>
            <div
              className={`inline-block px-4 py-1 rounded-full mt-2 ${
                theme === "dark"
                  ? "bg-yellow-600/80 text-white"
                  : "bg-yellow-500/80 text-white"
              }`}>
              <span className="text-sm font-medium">Slide #1</span>
            </div>
          </div>

          {/* Calculator Container */}
          <div
            className={`
            p-6 rounded-3xl backdrop-blur-md border border-opacity-20
            ${
              theme === "dark"
                ? "bg-white/10 border-white/20 shadow-2xl shadow-black/20"
                : "bg-white/30 border-white/40 shadow-2xl shadow-black/10"
            }
          `}>
            {/* Display */}
            <div className="mb-6">
              <Display
                value={state.display}
                operation={state.operation}
                previousValue={state.previousValue?.toString()}
              />
            </div>

            {/* Button Grid */}
            <div className="grid grid-cols-4 gap-3">
              {buttonLayout.map((row, rowIndex) =>
                row.map((button, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={
                      "span" in button && button.span === 2 ? "col-span-2" : ""
                    }>
                    <Button
                      value={button.value}
                      type={button.type}
                      onClick={(value) => handleButtonClick(value, button.type)}
                    />
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}>
              • Great for learning logic, functions, and user input.
            </p>
            <p
              className={`text-xs mt-2 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}>
              @tajnetworkafrica
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
