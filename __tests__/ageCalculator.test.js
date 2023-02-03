import UserData from '../src/js/ageCalculator.js';

describe('UserData', () => {
    let user;
  beforeEach(() => {
    user = new UserData(1, 11, 1997);
  })

  test("should correctly create an AgeCheck object with user's birthday", () => {
    const userData = new UserData(1, 11, 1997);
    expect(userData.year).toEqual(1997);
    expect(userData.month).toEqual(11);
    expect(userData.day).toEqual(1);
  });

  test("should correctly calculate a users age based on birthday", () => {
    expect(user.userAge()).toEqual(25);
  });

  test("should correctly return a user's age in Mercury years", () => {
    expect(user.mercuryAge(user.userAge())).toEqual(104.17)
  });

  test("should correctly return a user's age in Venus years", () => {
    expect(user.venusAge(user.userAge())).toEqual(40.32)
  });

  test("should correctly return a user's age in Mars years", () => {
    expect(user.marsAge(user.userAge())).toEqual(13.30)
  });

  test("should correctly return a user's age in Jupiter years", () => {
    expect(user.jupiterAge(user.userAge())).toEqual(2.11)
  });

  test("should correctly determine how many years have passed on each planet since past birthday", () => {
    let yearsPast = user.yearsPassed(2);
    expect(yearsPast).toEqual({
      "Earth": 23,
      "Mercury": 95.83,
      "Venus": 37.1,
      "Mars": 12.23,
      "Jupiter": 1.94,
    })
  });

  test("should correctly determine how many years have yet to pass until a future birthday", () => {
    let yearsFuture = user.yearsFuture(30);
    expect(yearsFuture).toEqual({
      "Earth": 5,
      "Mercury": 20.83,
      "Venus": 8.06,
      "Mars": 2.66,
      "Jupiter": 0.42,
    })
  });

});