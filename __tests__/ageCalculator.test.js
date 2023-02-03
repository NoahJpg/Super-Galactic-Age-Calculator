import AgeCheck from '../src/js/ageCalculator.js';

describe('AgeCheck', () => {

  test("should correctly determine the user's age", () => {
    const age = new AgeCheck(1, 11, 1997);
    expect(age.year).toEqual(1997);
    expect(age.month).toEqual(11);
    expect(age.day).toEqual(1);
  });

});