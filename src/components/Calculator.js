// Calculator.js
import Btn from './BtnKey';
import calculate from '../logic/calculate';

const Calculator = () => (
  <div className="container">
    <div className="input">
      <input type="text" placeholder="0" id="display" required className="field" />
    </div>
    <Btn />
  </div>
);

export default Calculator;
