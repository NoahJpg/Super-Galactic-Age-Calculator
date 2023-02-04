import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import UserData from './js/ageCalculator.js';

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("birthday-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const birthdayInput = document.getElementById("birthday").value;
    const birthdayArray = birthdayInput.split("-");
    const year = birthdayArray[0];
    const month = birthdayArray[1] - 1;
    const day = birthdayArray[2];
    const userData = new UserData(day, month, year);

    const mercuryAge = document.getElementById("mercury-age");
    mercuryAge.innerHTML = `Your age on Mercury: ${userData.mercuryAge(userData.userAge())} years old`;

    const venusAge = document.getElementById("venus-age");
    venusAge.innerHTML = `Your age on Venus: ${userData.venusAge(userData.userAge())} years old`;

    const earthAge = document.getElementById("earth-age");
    earthAge.innerHTML = `Your age on Earth: ${userData.userAge()} years old`;

    const marsAge = document.getElementById("mars-age");
    marsAge.innerHTML = `Your age on Mars: ${userData.marsAge(userData.userAge())} years old`;

    const jupiterAge = document.getElementById("jupiter-age");
    jupiterAge.innerHTML = `Your age on Jupiter: ${userData.jupiterAge(userData.userAge())} years old`;
  });
});
