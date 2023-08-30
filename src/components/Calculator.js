import React, { useState } from 'react';
import './Calculator.css';

import Btn from './BtnKey';
import calculate from '../logic/calculate';

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
    <>
      <h1 className="title">Calculator is Powerful Machine. Use Wisely!</h1>
      <div className="container">
        <div className="input">
          <input
            type="text"
            placeholder="0"
            id="display"
            required
            className="field"
            value={calculatorState.next || calculatorState.total || ''}
            readOnly
          />
        </div>
        <Btn onClick={handleButtonClick} />
      </div>
    </>
  );
};

export default Calculator;
