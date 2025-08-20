import { OperationType } from "../types/calculator.types";

export const performCalculation = (
  previousValue: number,
  currentValue: number,
  operation: OperationType
): number => {
  switch (operation) {
    case "+":
      return previousValue + currentValue;
    case "-":
      return previousValue - currentValue;
    case "×":
      return previousValue * currentValue;
    case "÷":
      if (currentValue === 0) {
        throw new Error("Cannot divide by zero");
      }
      return previousValue / currentValue;
    default:
      return currentValue;
  }
};

export const formatNumber = (num: number): string => {
  // Handle very large numbers with scientific notation
  if (Math.abs(num) >= 1e15) {
    return num.toExponential(2);
  }

  // Handle very small numbers
  if (Math.abs(num) < 1e-10 && num !== 0) {
    return num.toExponential(2);
  }

  // Format normal numbers with appropriate decimal places
  const str = num.toString();

  // If the number has more than 10 digits, use scientific notation
  if (str.replace(".", "").replace("-", "").length > 10) {
    return num.toExponential(2);
  }

  // Remove trailing zeros for decimal numbers
  if (str.includes(".")) {
    return parseFloat(str).toString();
  }

  return str;
};

export const addCommas = (str: string): string => {
  // Split the string into integer and decimal parts
  const parts = str.split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1];

  // Add commas to the integer part
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Combine with decimal part if it exists
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
};

export const calculatePercentage = (value: number): number => {
  return value / 100;
};

export const toggleSign = (value: number): number => {
  return value * -1;
};

export const isValidInput = (
  currentDisplay: string,
  newDigit: string
): boolean => {
  // Don't allow multiple decimal points
  if (newDigit === "." && currentDisplay.includes(".")) {
    return false;
  }

  // Don't allow leading zeros except for decimal numbers
  if (newDigit === "0" && currentDisplay === "0") {
    return false;
  }

  // Limit display length to prevent overflow
  if (currentDisplay.length >= 10 && newDigit !== ".") {
    return false;
  }

  return true;
};
