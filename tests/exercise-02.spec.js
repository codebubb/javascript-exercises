import { getFileExtension } from '../src/exercise-02';

describe(`
Write a JavaScript function to get the extension of a filename 
provided as a string. An extension with multiple period separators
should be considered as the entire extension (e.g. .config.js)
`, () => {
  it('should return the extension of a filename in a string', () => {
    expect(getFileExtension('index.html')).toBe('html');
    expect(getFileExtension('image.jpeg')).toBe('jpeg');
    expect(getFileExtension('file.txt')).toBe('txt');
  });

  it('should return the full extension if there are multiple periods', () => {
    expect(getFileExtension('jest.config.js')).toBe('config.js');
    expect(getFileExtension('babel.config.js')).toBe('config.js');
  });

  it('should return an empty string if there is no extension', () => {
    expect(getFileExtension('index')).toBe('');
  });

  it('should return an empty string if a null/undefined or empty string is provided', () => {
    expect(getFileExtension('')).toBe('');
    expect(getFileExtension(null)).toBe('');
    expect(getFileExtension(undefined)).toBe('');
  });
});
