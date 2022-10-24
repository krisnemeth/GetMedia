let firstName = window.localStorage.getItem('storedFirstName')
let lastName = window.localStorage.getItem('storedLastName')
let address = window.localStorage.getItem('storedAddress')
let email = window.localStorage.getItem('storedEmail')
let sum = window.localStorage.getItem('sum')

document.getElementById('name').innerHTML = `${firstName} ${lastName}`
document.getElementById('email').innerHTML = `${email}`
document.getElementById('address').innerHTML = `${address}`

if (localStorage.getItem('sum')) {
    document.getElementById("totalPrice").innerHTML = `£${sum}`;
} else {
    document.getElementById("totalPrice").innerHTML = `£0`;
}
