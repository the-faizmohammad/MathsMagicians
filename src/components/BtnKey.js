// BtnKey.js
import calculate from "../logic/calculate";
const Btn = () => (
  <div className="buttons">
    <button className="tiles btn" type="button">AC</button>
    <button className="tiles btn" type="button">+/-</button>
    <button className="tiles btn" type="button">%</button>
    <button className="tiles operations btn" type="button">&#247;</button>
    <button className="tiles btn" type="button">7</button>
    <button className="tiles btn" type="button">8</button>
    <button className="tiles btn" type="button">9</button>
    <button className="tiles operations btn" type="button">x</button>
    <button className="tiles btn" type="button">4</button>
    <button className="tiles btn" type="button">5</button>
    <button className="tiles btn" type="button">6</button>
    <button className="tiles operations btn" type="button">-</button>
    <button className="tiles btn" type="button">1</button>
    <button className="tiles btn" type="button">2</button>
    <button className="tiles btn" type="button">3</button>
    <button className="tiles operations btn" type="button">+</button>
    <button className="tiles btn" type="button">0</button>
    <button className="tiles btn" type="button">.</button>
    <button className="tiles operations btn" type="button">=</button>
  </div>
);

export default Btn;
