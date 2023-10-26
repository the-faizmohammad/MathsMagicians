import operate from "../logic/operate";

describe('Test cases for operations', () => {
  test('Case 1: add', () => {
    expect(operate('1', '1', '+')).toBe('2');
  });

  test('Case 2: sub', () => {
    expect(operate('2', '1', '-')).toBe('1');
  });

  test('Case 3: mul', () => {
    expect(operate('1', '1', 'x')).toBe('1');
  });

  test('Case 4: div', () => {
    expect(operate('1', '1', '÷')).toBe('1');
  });

  test('Case 5: div by 0', () => {
    expect(operate('1', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('Case 6: modulus of 0', () => {
    expect(operate('1', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});