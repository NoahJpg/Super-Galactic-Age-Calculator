export default class UserData {
  constructor(day, month, year) {
    this.day = day;
    this.year = year;
    this.month = month;
  }

  userAge() {
    let birthday = new Date(this.year, this.month, this.day);
    let today = Date.now() - birthday;
    let age = (today / (365 * 24 * 60 * 60 * 1000));
    return Math.floor(age)    
  }

  mercuryAge(age) {
    let mercuryAge = (age / .24);
    return Number(mercuryAge.toFixed(2));
  }

  venusAge(age) {
    let venusAge = (age / .62);
    return Number(venusAge.toFixed(2));
  }

  marsAge(age) {
    let marsAge = (age / 1.88);
    return Number(marsAge.toFixed(2));
  }

  jupiterAge(age) {
    let jupiterAge = (age / 11.86);
    return Number(jupiterAge.toFixed(2))
  }

  yearsPassed(pastAge) {
    let currentAge = this.userAge();
    let ageDifference = currentAge - pastAge;
    return {
      "Earth": ageDifference,
      "Mercury": this.mercuryAge(ageDifference),
      "Venus": this.venusAge(ageDifference),
      "Mars": this.marsAge(ageDifference),
      "Jupiter": this.jupiterAge(ageDifference),
    };
  }

  yearsFuture(futureAge) {
    let currentAge = this.userAge();
    let ageDifference = futureAge - currentAge;
    return {
      "Earth": ageDifference,
      "Mercury": this.mercuryAge(ageDifference),
      "Venus": this.venusAge(ageDifference),
      "Mars": this.marsAge(ageDifference),
      "Jupiter": this.jupiterAge(ageDifference),
    };
  }
}