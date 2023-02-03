export default class UserData {
  constructor(day, month, year) {
    this.day = day;
    this.year = year;
    this.month = month;
  }


  userAge() {
    let birthday = new Date(this.year, this.month, this.day);
    let today = Date.now() - birthday;
    let age = Math.floor(today / (365 * 24 * 60 * 60 * 1000));
    return age;
  }

  // mercuryAge(age) {

  // }
}