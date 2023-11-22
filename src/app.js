// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20,
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true,
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector('#patty');
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = 'inherit';
    // document.querySelector('.btn-patty').style.backgroundColor = '#ffd058';
  } else {
    patty.style.display = 'none';
    // document.querySelector('.btn-patty').style.backgroundColor = 'white';
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.getElementById('cheese');
  if (state.Cheese) {
    cheese.style.display = 'inherit';
    // document.querySelector('.btn-cheese').style.backgroundColor = '#ffd058';
  } else {
    cheese.style.display = 'none';
    // document.querySelector('.btn-cheese').style.backgroundColor = 'white';
  }
  // renderButtons()
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.getElementById('tomato');
  if (state.Tomatoes) {
    tomatoes.style.display = 'inherit';
    // document.querySelector('.btn-tomatoes').style.backgroundColor = '#ffd058';
  } else {
    tomatoes.style.display = 'none';
    // document.querySelector('.btn-tomatoes').style.backgroundColor = 'white';
  }
}
function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.getElementById('onion');
  if (state.Onions) {
    onion.style.display = 'inherit';
    // document.querySelector('.btn-onions').style.backgroundColor = '#ffd058';
  } else {
    onion.style.display = 'none';
    // document.querySelector('.btn-onions').style.backgroundColor = 'white';
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.getElementById('lettuce');
  if (state.Lettuce) {
    lettuce.style.display = 'inherit';
    // document.querySelector('.btn-lettuce').style.backgroundColor = '#ffd058';
  } else {
    lettuce.style.display = 'none';
    // document.querySelector('.btn-lettuce').style.backgroundColor = 'white';
  }
}

document.querySelector('.btn-patty').onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector('.btn-cheese').onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector('.btn-tomatoes').onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};
// Trial 2 - Setup event listener for the onion button
document.querySelector('.btn-onions').onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};
// Trial 2 - Setup event listener for the lettuce button
document.querySelector('.btn-lettuce').onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};
//Challenge 1 - Add/Remove the class active to the buttons based on state

//Challenge 2 - Render only the items selected in the ingredients board based on the state

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderButtons() {
  document
    .querySelector('.btn-cheese')
    .classList.toggle('active', state.Cheese);
  document.querySelector('.btn-patty').classList.toggle('active', state.Patty);
  document
    .querySelector('.btn-tomatoes')
    .classList.toggle('active', state.Tomatoes);
  document
    .querySelector('.btn-onions')
    .classList.toggle('active', state.Onions);
  document
    .querySelector('.btn-lettuce')
    .classList.toggle('active', state.Lettuce);
}
items = document.querySelectorAll('.items');
function renderIngredientsBoard() {
  if (state.Patty) {
    items[0].style.display = 'block';
  } else {
    items[0].style.display = 'none';
  }

  if (state.Cheese) {
    items[1].style.display = 'block';
  } else {
    items[1].style.display = 'none';
  }

  if (state.Tomatoes) {
    items[2].style.display = 'block';
  } else {
    items[2].style.display = 'none';
  }

  if (state.Onions) {
    items[3].style.display = 'block';
  } else {
    items[3].style.display = 'none';
  }

  if (state.Lettuce) {
    items[4].style.display = 'block';
  } else {
    items[4].style.display = 'none';
  }
}
function renderPrice() {
  let price = 20;
  if (state.Patty) {
    price = price + ingredients.Patty;
  }

  if (state.Cheese) {
    price = price + ingredients.Cheese;
  }

  if (state.Tomatoes) {
    price = price + ingredients.Tomatoes;
  }

  if (state.Onions) {
    price = price + ingredients.Onions;
  }

  if (state.Lettuce) {
    price = price + ingredients.Lettuce;
  }
  console.log(price);
  document.querySelector('.price-details').innerText = 'INR ' + price;
}

// var ingredients = {
//   Patty: 80,
//   Cheese: 10,
//   Tomatoes: 20,
//   Onions: 20,
//   Lettuce: 20,
// };
