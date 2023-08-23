// Calculator.js
import React, { useState } from 'react';
import './Calculator.css'; // Import the styling for the calculator

import Btn from './BtnKey';
import calculate from '../logic/calculate'; // Provide the correct path

const Calculator = () => {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const updatedState = calculate(calculatorState, buttonName);
    setCalculatorState(updatedState);
  };

  return (
    <div className="container">
      <div className="input">
        <input
          type="text"
          placeholder="0"
          id="display"
          required
          className="field"
          value={calculatorState.next || calculatorState.total || ''}
        />
      </div>
      <Btn onClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
