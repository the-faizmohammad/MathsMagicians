import './home.css';
import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    this.setupVisualEffects();
  }

  getRandomNumber = (min, max) => Math.random() * (max - min) + min;

  animateNumber = (element) => {
    const targetY = window.innerHeight - 250;
    const modifiedElement = element;

    modifiedElement.addEventListener('mouseover', () => {
      modifiedElement.style.transform = `
        translate(${this.getRandomNumber(-600, 600)}px, ${this.getRandomNumber(-650, 60)}px)
        rotate(${this.getRandomNumber(-90, 180)}deg)
      `;

      setTimeout(() => {
        modifiedElement.style.transform = 'none';
      }, 3000);
    });

    const updatePosition = () => {
      const currentY = parseFloat(modifiedElement.style.top);
      const deltaY = (targetY - currentY) * 0.1;
      modifiedElement.style.top = `${currentY + deltaY}px`;
      requestAnimationFrame(updatePosition);
    };

    updatePosition();
  };

  setupVisualEffects = () => {
    const numbers = Array.from({ length: 100 }, (_, index) => index + 1);

    numbers.forEach((number) => {
      const xPosition = this.getRandomNumber(0, window.innerWidth);
      const yPosition = this.getRandomNumber(0, window.innerHeight);

      const numberElement = document.createElement('div');
      numberElement.textContent = number;
      numberElement.classList.add('number');
      numberElement.classList.add(number % 2 === 0 ? 'orange' : 'sky-blue');
      numberElement.style.left = `${xPosition}px`;
      numberElement.style.top = `${yPosition}px`;

      this.animateNumber(numberElement);
      this.containerRef.current.appendChild(numberElement);
    });
  };

  render() {
    return (
      <div className="home-container" ref={this.containerRef}>
        <div className="home-content">
          <h1 className="home-title">The History of Calculators</h1>
          <p className="paragraph">
            The abacus, with movable beads on rods, marks the earliest known calculator,
            used across ancient civilizations for basic arithmetic and calculations.
          </p>
          <p className="paragraph">
            Blaise Pascal invents the Pascaline, a mechanical calculator that uses
            gears and wheels to perform addition and subtraction with reliability.
          </p>
          <p className="paragraph">
            Gottfried Wilhelm Leibniz designs the stepped drum calculator,
            advancing mechanical computation with capabilities for multiplication and division.
          </p>
          <p className="paragraph">
            Charles Babbage conceives the Analytical Engine, a mechanical marvel with memory
            serving as a precursor to modern computers.
          </p>
          <p className="paragraph">
            The Curta Calculator, a handheld mechanical wonder by Curt Herzstark,
            simplifies complex arithmetic and earns popularity for its portability.
          </p>
          <p className="paragraph">
            Electronic calculators emerge, utilizing transistors and integrated circuits to enable
            and more precise arithmetic calculations.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
