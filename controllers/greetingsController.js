//setting variables for current time, and getting name data out of localStorage
const now = new Date().getHours();
let firstName = localStorage.getItem("storedFirstName");

//checking what time of day it is, and based on conditions, offering a different greeting.
if (now >= 6 && now <= 12) {
  document.getElementById("greetings").innerHTML = `Good morning ${firstName}`;
} else if (now >= 12 && now <= 18) {
  document.getElementById(
    "greetings"
  ).innerHTML = `Good afternoon ${firstName}!`;
} else if (now >= 18 && now <= 00) {
  document.getElementById("greetings").innerHTML = `Good evening ${firstName}`;
} else {
  document.getElementById(
    "greetings"
  ).innerHTML = `Night owls are we, ${firstName}?`;
}
