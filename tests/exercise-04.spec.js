import { todaysDate } from '../src/exercise-04';

describe(`
Write a JavaScript function that will get the current date 
and returns it in the format dd/mm/yyyy specific format.
`, () => {
  it(`should return today's date in the format dd/mm/yyyy`, () => {
    const date = new Date();
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const year = date.getFullYear();

    const expectedResult = `${String(days).padStart(2, '0')}/${String(months).padStart(
      2,
      '0'
    )}/${year}`;
    expect(todaysDate()).toBe(expectedResult);
  });
});
