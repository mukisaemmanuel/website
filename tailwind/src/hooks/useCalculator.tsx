import { useState, useCallback } from "react";
import { CalculatorState, OperationType } from "../types/calculator.types";
import {
  performCalculation,
  formatNumber,
  calculatePercentage,
  toggleSign,
  isValidInput,
} from "../utils/calculator.utils";

const initialState: CalculatorState = {
  display: "0",
  previousValue: null,
  currentValue: null,
  operation: null,
  isNewEntry: true,
  hasDecimal: false,
};

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>(initialState);

  const handleNumberClick = useCallback((num: string) => {
    setState((prevState) => {
      if (num === "." && prevState.hasDecimal) {
        return prevState;
      }

      if (!isValidInput(prevState.display, num)) {
        return prevState;
      }

      let newDisplay: string;
      let newHasDecimal = prevState.hasDecimal;

      if (prevState.isNewEntry) {
        newDisplay = num === "." ? "0." : num;
        newHasDecimal = num === ".";
      } else {
        if (prevState.display === "0" && num !== ".") {
          newDisplay = num;
        } else {
          newDisplay = prevState.display + num;
        }
        if (num === ".") {
          newHasDecimal = true;
        }
      }

      return {
        ...prevState,
        display: newDisplay,
        currentValue: parseFloat(newDisplay),
        isNewEntry: false,
        hasDecimal: newHasDecimal,
      };
    });
  }, []);

  const handleOperatorClick = useCallback((operation: OperationType) => {
    setState((prevState) => {
      if (operation === "=") {
        return prevState;
      }

      let newPreviousValue = prevState.currentValue || 0;
      let newDisplay = prevState.display;

      // If there's a previous operation, perform it first
      if (
        prevState.operation &&
        prevState.previousValue !== null &&
        prevState.currentValue !== null &&
        !prevState.isNewEntry
      ) {
        try {
          const result = performCalculation(
            prevState.previousValue,
            prevState.currentValue,
            prevState.operation
          );
          newPreviousValue = result;
          newDisplay = formatNumber(result);
        } catch (error) {
          newDisplay = "Error";
          newPreviousValue = 0;
        }
      }

      return {
        ...prevState,
        display: newDisplay,
        previousValue: newPreviousValue,
        currentValue: null,
        operation,
        isNewEntry: true,
        hasDecimal: false,
      };
    });
  }, []);

  const handleEqualsClick = useCallback(() => {
    setState((prevState) => {
      if (
        !prevState.operation ||
        prevState.previousValue === null ||
        prevState.currentValue === null
      ) {
        return prevState;
      }

      try {
        const result = performCalculation(
          prevState.previousValue,
          prevState.currentValue,
          prevState.operation
        );

        return {
          ...prevState,
          display: formatNumber(result),
          previousValue: null,
          currentValue: result,
          operation: null,
          isNewEntry: true,
          hasDecimal: result.toString().includes("."),
        };
      } catch (error) {
        return {
          ...initialState,
          display: "Error",
        };
      }
    });
  }, []);

  const handleUtilityClick = useCallback((utility: string) => {
    setState((prevState) => {
      switch (utility) {
        case "C":
          return initialState;

        case "+/-":
          if (prevState.currentValue === null || prevState.currentValue === 0) {
            return prevState;
          }
          const toggledValue = toggleSign(prevState.currentValue);
          return {
            ...prevState,
            display: formatNumber(toggledValue),
            currentValue: toggledValue,
          };

        case "%":
          if (prevState.currentValue === null) {
            return prevState;
          }
          const percentageValue = calculatePercentage(prevState.currentValue);
          return {
            ...prevState,
            display: formatNumber(percentageValue),
            currentValue: percentageValue,
          };

        default:
          return prevState;
      }
    });
  }, []);

  const handleClearClick = useCallback(() => {
    setState(initialState);
  }, []);

  return {
    state,
    handleNumberClick,
    handleOperatorClick,
    handleUtilityClick,
    handleEqualsClick,
    handleClearClick,
  };
};
