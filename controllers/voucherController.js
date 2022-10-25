//using duplicate code to prevent errors that occured when button events' buttons were located on different pages.
//I know it's not best practice, wanted to avoid any errors in the console.
//For detailed description of code, please see cartController.

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

let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));

function addItem(productId) {
  let product = products.find(function (product) {
    return product.id == productId;
  });
  if (cart.length == 0) {
    cart.push(product);
  } else {
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

  localStorage.setItem("sum", sum);
}

function getQuantity(){
  let temp = cart.map(function (item) {
    return parseInt(item.quantity);
  });
  let quantity = temp.reduce(function (prev, next) {
    return prev + next;
  }, 0);
  localStorage.setItem("quantity", quantity)
}

// button event handlers

document.getElementById("btn1").addEventListener("click", function () {
  //getting the value from the select
  let quantity = parseInt(document.getElementById("inputGroupSelect01").value);
  //calling additem function with the relevant productID
  addItem(1);
  //updating the quantity based on the input value
  updateQuantity(1, quantity);
  //calculating, and storing the current value in localStorage
  getTotal();
  getQuantity();
});

document.getElementById("btn2").addEventListener("click", function () {
  let quantity = parseInt(document.getElementById("inputGroupSelect02").value);
  addItem(2);
  updateQuantity(2, quantity);
  getTotal();
  getQuantity();
});

document.getElementById("btn3").addEventListener("click", function () {
  let quantity = parseInt(document.getElementById("inputGroupSelect03").value);
  addItem(3);
  updateQuantity(3, quantity);
  getTotal();
  getQuantity();
});
