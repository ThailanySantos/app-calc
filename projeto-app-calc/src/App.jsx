import React, { useState } from "react";
import Display from "./Componentes/Display/display";
import ButtonPanel from "./Componentes/Button Panel/buttonPanel";
import "../src/App.css";

const App = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleClick = (buttonName) => {
    if (buttonName === "RESET") {
      resetCalculator();
    } else if (buttonName === "DEL") {
      deleteLastDigit();
    } else if (isOperator(buttonName)) {
      handleOperator(buttonName);
    } else if (buttonName === "=") {
      performCalculation();
    } else {
      handleNumber(buttonName);
    }
  };

  const resetCalculator = () => {
    setDisplayValue("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNewValue(false);
  };

  const deleteLastDigit = () => {
    setDisplayValue(displayValue.length > 1 ? displayValue.slice(0, -1) : "0");
  };

  const isOperator = (buttonName) => {
    return ["+", "-", "x", "/"].includes(buttonName);
  };

  const handleOperator = (operator) => {
    if (previousValue === null) {
      setPreviousValue(displayValue);
    } else if (!waitingForNewValue) {
      performCalculation();
    }
    setOperator(operator);
    setWaitingForNewValue(true);
  };

  const handleNumber = (number) => {
    if (waitingForNewValue) {
      setDisplayValue(number);
      setWaitingForNewValue(false);
    } else {
      setDisplayValue(displayValue === "0" ? number : displayValue + number);
    }
  };

  const performCalculation = () => {
    if (operator && previousValue !== null) {
      const currentValue = parseFloat(displayValue);
      const prevValue = parseFloat(previousValue);
      let result;

      switch (operator) {
        case "+":
          result = prevValue + currentValue;
          break;
        case "-":
          result = prevValue - currentValue;
          break;
        case "x":
          result = prevValue * currentValue;
          break;
        case "/":
          result = prevValue / currentValue;
          break;
        default:
          return;
      }

      setDisplayValue(result.toString());
      setPreviousValue(null);
      setOperator(null);
      setWaitingForNewValue(false);
    }
  };

  return (
    <div className="app">
      <header className="calc-header">calc</header>
      <Display value={displayValue} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
