import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Home from '../spa/home';
import Quote from '../Api/Quote';
import Calculator from '../components/Calculator';

describe('Tests for Navigation components', () => {
  test('Case 1: Home page snapshot', () => {
    const check = render(<Home />);
    expect(check).toMatchSnapshot();
  });

  test('Case 2: Calculator page snapshot', () => {
    const check = render(<Calculator />);
    expect(check).toMatchSnapshot();
  });

  test('Case 3: Quote page snapshot', () => {
    const check = render(<Quote />);
    expect(check).toMatchSnapshot();
  });
});
