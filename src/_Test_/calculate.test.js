import calculate from "../logic/calculate";

describe('Tests for calculate component', () => {
  test('Case 1: Addition', () => {
    let data = {
        total: null,
        next: null,
        operation: null,
    }
    data = calculate(data, '1');
    data = calculate(data, '+');
    data = calculate(data, '2');
    data = calculate(data, '=');
    expect(data.total).toBe('3');
  });
  test('Case 2: Subtraction', () => {
    let data = {
        total: null,
        next: null,
        operation: null,
    }
    data = calculate(data, '1');
    data = calculate(data, '-');
    data = calculate(data, '2');
    data = calculate(data, '=');
    expect(data.total).toBe('-1');
  });
  test('Case 3: Multiplication', () => {
    let data = {
        total: null,
        next: null,
        operation: null,
    }
    data = calculate(data, '1');
    data = calculate(data, 'x');
    data = calculate(data, '2');
    data = calculate(data, '=');
    expect(data.total).toBe('2');
  });
  test('Case 4: Division', () => {
    let data = {
        total: null,
        next: null,
        operation: null,
    }
    data = calculate(data, '10');
    data = calculate(data, '÷');
    data = calculate(data, '2');
    data = calculate(data, '=');
    expect(data.total).toBe('5');
  });

  /*test('Case 5: AC', () => {
    let data = {
        total: null,
        next: null,
        operation: null,
    }
    data = calculate(data, '10');
    data = calculate(data, '÷');
    data = calculate(data, '2');
    data = calculate(data, 'AC');
    expect(data.total).toBe(0);
  });*/
});