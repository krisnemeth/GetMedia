// Fetching the json file, catching the response, the storing it in localstorage after having checked if there's anything in there
fetch("./products.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    localStorage.setItem("products", JSON.stringify(data));
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", "[]");
    }
  });

//   Setting global variables

let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));


function addItem(productId) {
  // using find method on the products array, and if the product Id matches our argument it will be stored in the variable
  let product = products.find(function (product) {
    return product.id == productId;
  });

  if (cart.length == 0) {
    cart.push(product);
  } else {
    // searching for the product in the cart array. if it exists, find will return product and store it in res variable. if it doesnt exist it will return undefined
    let res = cart.find((element) => element.id == productId);

    if (res === undefined) {
      cart.push(product);
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeItem(productId) {
  let temp = cart.filter((item) => item.id != productId);
  localStorage.setItem("cart", JSON.stringify(temp));
}
// removeItem(3)

function updateQuantity(productId, quantity) {
  for (let product of cart) {
    if (product.id == productId) {
      product.quantity = quantity;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getTotal() {
  let temp = cart.map(function (item) {
    return parseInt(item.price * item.quantity);
  });

  let sum = temp.reduce(function (prev, next) {
    return prev + next;
  }, 0);
  
  localStorage.setItem('sum', sum)
}

// button event handlers

document.getElementById("btn1").addEventListener("click", function () {
  let quantity = parseInt(document.getElementById("inputGroupSelect01").value);
  addItem(1);
  updateQuantity(1, quantity);
  getTotal()
});

document.getElementById("btn2").addEventListener("click", function () {
  let quantity = parseInt(document.getElementById("inputGroupSelect02").value);
  addItem(2);
  updateQuantity(2, quantity);
  getTotal()
});

document.getElementById("btn3").addEventListener("click", function () {
  let quantity = parseInt(document.getElementById("inputGroupSelect03").value);
  addItem(3);
  updateQuantity(3, quantity);
  getTotal()
});

document.getElementById('')