// Fetching the json file, resolving the promise (response object) catching it with the response variable which is the argument.
fetch("./products.json")
  .then(function (response) {
    return response.json();
  })
  //the json method also returns a promise, so using another then method to catch the array of products with the data variable, which is the argument.
  .then(function (data) {
    //saving data to localStorage
    localStorage.setItem("products", JSON.stringify(data));
    //checking if there's a cart already existing in storage, if not, then creating an empty array for it
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", "[]");
    }
  });

//   Setting global variables
let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));

//function to add items to cart
function addItem(productId) {
  // using find method on the products array, and if the product ID matches our argument it will be stored in the product variable
  let product = products.find(function (product) {
    return product.id == productId;
  });
  //checking if the cart is empty, if so, add the product
  if (cart.length == 0) {
    cart.push(product);
  } else {
    // searching for the product in the cart array. if it exists, find will return product and store it in res variable. if it doesnt exist it will return undefined
    let res = cart.find((element) => element.id == productId);
    //if the product doesnt exist (undefined) then we push the product to the cart
    if (res === undefined) {
      cart.push(product);
    }
  }
  //putting the cart back to localStorage to overwrite the old values with the new ones
  localStorage.setItem("cart", JSON.stringify(cart));
}

//function to remove items from the cart
function removeItem(productId) {
  //creating a new array (temp) to hold all products except the one we want to remove using filter method
  let temp = cart.filter((item) => item.id != productId);
  //putting the cart back to storage overwriting the old values
  localStorage.setItem("cart", JSON.stringify(temp));
}

//function to update the quantity of items in the cart
function updateQuantity(productId, quantity) {
  //looping through cart array, finding the product with the matching ID, then targeting the quantity setting the new value
  for (let product of cart) {
    if (product.id == productId) {
      //if true, update quantity
      product.quantity = quantity;
    }
  }
  //putting the cart back to storage overwriting the old values
  localStorage.setItem("cart", JSON.stringify(cart));
}

//function to calculate the total price of items in the cart
function getTotal() {
  //creating a new array using map method to hold every product's price value, then summarize the price amount
  let temp = cart.map(function (item) {
    return parseInt(item.price * item.quantity);
  });
  //using reduce to add the prev value with the next. this goes until the length of the array, until we're left with sum.
  let sum = temp.reduce(function (prev, next) {
    return prev + next;
  }, 0);
  //saving the sum in local storage
  localStorage.setItem("sum", sum);
}

//function to calculate the overall amount of vouchers in the cart
function getQuantity() {
  //creating a new array using map method to hold every product's quantity
  let temp = cart.map(function (item) {
    return parseInt(item.quantity);
  });
  //using reduce to add the prev value with the next. this goes until the length of the array, until we're left with quantity total.
  let quantity = temp.reduce(function (prev, next) {
    return prev + next;
  }, 0);
  //saving quantity to localStorage
  localStorage.setItem("quantity", quantity);
}



//button event to clear the cart
document.getElementById("clear").addEventListener("click", function () {
  //removing items from the localStorage
  localStorage.removeItem("sum");
  localStorage.removeItem("cart");
  localStorage.removeItem('quantity');
  //reloading the window so the cart is usable again if the user wishes
  window.location.reload();
});

document.getElementById("purchase").addEventListener("click", function () {
  //removing items from the localStorage
  localStorage.removeItem("sum");
  localStorage.removeItem("cart");
  localStorage.removeItem('quantity');
  //reloading the window so the cart is usable again if the user wishes
  window.location.reload();
  //and finally, redirecting the user to the cartSubmit page
  window.location.href = 'cartSubmit.html'
});


