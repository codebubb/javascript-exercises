import { isEqualTo100 } from '../src/exercise-01';

describe(`
Write a JavaScript program to check two numbers and return true if
one of the numbers is 100 or if the sum of the two numbers is 100
`, () => {
  it('should return true if the first number is 100', () => {
    const result = isEqualTo100(100, 0);
    expect(result).toBe(true);
  });

  it('should return true if the second number is 100', () => {
    const result = isEqualTo100(0, 100);
    expect(result).toBe(true);
  });

  it('should return true if the sum of the numbers is 100', () => {
    const result = isEqualTo100(50, 50);
    expect(result).toBe(true);
  });
});
