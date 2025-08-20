import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Calculator from "./components/Calculator";
import "./index.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Calculator />
    </ThemeProvider>
  );
};

export default App;
