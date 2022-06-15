import { moveCharsForwardInAlphabet } from '../src/exercise-03';

describe(`
Write a function that accepts a string and moves the characters 
in the string by 1 position in the alphabet. It should be able to handle 
any number of characters in the string.  Optionally it can move the 
characters by a variable number of positions.
`, () => {
  it('should return the character b if we pass in the character a', () => {
    const result =
      moveCharsForwardInAlphabet('a');

    expect(result).toBe('b');
  });

  it('should return the next character in the alphabet', () => {
    expect(moveCharsForwardInAlphabet('b')).toBe(
      'c'
    );
    expect(moveCharsForwardInAlphabet('d')).toBe(
      'e'
    );
    expect(moveCharsForwardInAlphabet('e')).toBe(
      'f'
    );
  });

  it('should return all the characters in the string moved forward in the alphabet', () => {
    expect(
      moveCharsForwardInAlphabet('abcd')
    ).toBe('bcde');
  });

  it('return an empty string if the argument passed to the function is falsy', () => {
    expect(moveCharsForwardInAlphabet(null)).toBe(
      ''
    );
    expect(
      moveCharsForwardInAlphabet(undefined)
    ).toBe('');
  });

  it('should return letters in the alphabet moved by a different number of positions', () => {
    expect(
      moveCharsForwardInAlphabet('a', 2)
    ).toBe('c');

    expect(
      moveCharsForwardInAlphabet('abc', 2)
    ).toBe('cde');
  });

  it('should return the character a when the character z is passed in', () => {
    expect(moveCharsForwardInAlphabet('z')).toBe(
      'a'
    );
  });
});
