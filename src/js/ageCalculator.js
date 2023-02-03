export default class UserData {
  constructor(day, month, year) {
    this.day = day;
    this.year = year;
    this.month = month;
  }


  userAge() {
    let today = new Date();
    let birthday = new Date(this.year, this.month, this.day);
    let age = today.getFullYear() - birthday.getFullYear();
    let month = today.getMonth() - birthday.getMonth();
    if (month < 0 || month === 0 && today.getDate() < birthday.getDate())
    age--;
    return age;
  }
}