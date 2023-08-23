// Calculator.js
import Btn from './BtnKey';
import calculate from '../logic/calculate';
const Calculator = () => {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });
}

const handleButtonClick = (buttonName) => {
  const updatedState = calculate(calculatorState, buttonName);
  setCalculatorState(updatedState);
};

export default Calculator;
