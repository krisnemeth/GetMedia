const now = new Date().getHours();
let firstName = localStorage.getItem("storedFirstName");

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
