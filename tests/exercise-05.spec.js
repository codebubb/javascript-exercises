import { prefixText } from '../src/exercise-05';

describe(`
Write a JavaScript function that will prefix a string with
another provided string and return it. The original string should
be returned if it already starts with the string to prefix.
`, () => {
  it('should prefix a string with the provided value', () => {
    expect(prefixText('JavaScript', 'Groovy')).toBe('Groovy JavaScript');
  });

  it('should not apply the prefixed string provided if it already exists at the start of the string', () => {
    expect(prefixText('JavaScript', 'JavaScript')).toBe('JavaScript');
    expect(prefixText('JavaScript is Groovy', 'JavaScript')).toBe('JavaScript is Groovy');
  });

  it('should return the original string if no prefix is provided', () => {
    expect(prefixText('Original String')).toBe('Original String');
  });

  it('should return an empty string if there is a prefix and no string to prefix is provided', () => {
    expect(prefixText(null, 'prefix')).toBe('');
  });

  it('should return just the prefix if the original text is empty', () => {
    expect(prefixText('', 'prefix')).toBe('prefix');
  });
});
