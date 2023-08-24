// App.js
import './components/Calculator.css';
import Calculator from './components/Calculator';
import Quote from './Api/Quote';

function App() {
  return (
    <div id="app-root">
      <Calculator />
      <Quote />
    </div>
  );
}

export default App;
