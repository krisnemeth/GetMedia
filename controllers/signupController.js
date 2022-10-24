document.getElementById("submit").addEventListener("click", function () {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;

  localStorage.setItem("storedFirstName", firstName);
  localStorage.setItem("storedLastName", lastName);
  localStorage.setItem("storedEmail", email);
  localStorage.setItem("storedAddress", address);

  window.location.href = './home.html'
});