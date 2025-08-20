export type OperationType = "+" | "-" | "×" | "÷" | "=";

export type ButtonType = "number" | "operator" | "utility" | "equals";

export interface CalculatorState {
  display: string;
  previousValue: number | null;
  currentValue: number | null;
  operation: OperationType | null;
  isNewEntry: boolean;
  hasDecimal: boolean;
}

export interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
  type?: ButtonType;
  className?: string;
  disabled?: boolean;
}

export interface CalculatorContextType {
  state: CalculatorState;
  handleNumberClick: (num: string) => void;
  handleOperatorClick: (op: OperationType) => void;
  handleUtilityClick: (utility: string) => void;
  handleEqualsClick: () => void;
  handleClearClick: () => void;
}

export type Theme = "dark" | "light";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
