// BtnKey.js
import React from 'react';
import PropTypes from 'prop-types';

const Btn = ({ onClick }) => (
  <div className="buttons">
    <button className="tiles btn" type="button" onClick={() => onClick('AC')}>AC</button>
    <button className="tiles btn" type="button" onClick={() => onClick('+/-')}>+/-</button>
    <button className="tiles btn" type="button" onClick={() => onClick('%')}>%</button>
    <button className="tiles btn" type="button" onClick={() => onClick('7')}>7</button>
    <button className="tiles btn" type="button" onClick={() => onClick('8')}>8</button>
    <button className="tiles btn" type="button" onClick={() => onClick('9')}>9</button>
    <button className="tiles btn" type="button" onClick={() => onClick('4')}>4</button>
    <button className="tiles btn" type="button" onClick={() => onClick('5')}>5</button>
    <button className="tiles btn" type="button" onClick={() => onClick('6')}>6</button>
    <button className="tiles btn" type="button" onClick={() => onClick('1')}>1</button>
    <button className="tiles btn" type="button" onClick={() => onClick('2')}>2</button>
    <button className="tiles btn" type="button" onClick={() => onClick('3')}>3</button>
    <button className="tiles btn" type="button" onClick={() => onClick('0')}>0</button>
    <button className="tiles btn" type="button" onClick={() => onClick('.')}>.</button>
  </div>
);

// Add prop type validation
Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Btn;
