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
    expect(user.mercuryAge(user.userAge())).toEqual(104)
  });

  test("should correctly return a user's age in Venus years", () => {
    expect(user.venusAge(user.userAge())).toEqual(40)
  });

  test("should correctly return a user's age in Mars years", () => {
    expect(user.marsAge(user.userAge())).toEqual(13)
  });

  test("should correctly return a user's age in Jupiter years", () => {
    expect(user.jupiterAge(user.userAge())).toEqual(2)
  });



});