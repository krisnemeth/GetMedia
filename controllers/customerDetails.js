//getting data out of localStorage and sotring it in variables
let firstName = localStorage.getItem('storedFirstName')
let lastName = localStorage.getItem('storedLastName')
let address = localStorage.getItem('storedAddress')
let email = localStorage.getItem('storedEmail')
let sum = localStorage.getItem('sum')
let quantity = localStorage.getItem("quantity")

//pushing dynamic data into DOM elements

document.getElementById('name').innerHTML = `${firstName} ${lastName}`
document.getElementById('email').innerHTML = `${email}`
document.getElementById('address').innerHTML = `${address}`

//checking if quantity is available, if not, not displaying it.
if (localStorage.getItem("quantity")) {
    document.getElementById("quantity").innerHTML = `x${quantity}`;
} else {
    document.getElementById("totalPrice").innerHTML = ``;
}

//checking if sum data is available, if not, overwriting with static value
if (localStorage.getItem('sum')) {
    document.getElementById("totalPrice").innerHTML = `£${sum}`;
} else {
    document.getElementById("totalPrice").innerHTML = `£0`;
}