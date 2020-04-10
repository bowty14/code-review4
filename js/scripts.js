// Business logic interface
function PizzaToBuy () {
  this.pizzas = [];
  this.currentId = 0;
  console.log(this.pizzas);
}

PizzaToBuy.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

function Pizza(size,cheese, meat,veggies) {
  this.size = size;
  this.cheese = cheese;
  this.meat = meat;
  this.veggies = veggies;
}

PizzaToBuy.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PizzaToBuy.prototype.findPizza = function (id) {
  for (var i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id === id) {
        return this.pizzas[i];
      }
    }
  };
  return false;
}

Pizza.prototype.price = function () {
  var price = 15;
  if (this.size === "small") {
    price *= .9;
  } else if (this.size === "medium") {
    price *= 1.2;
  } else if (this.size === "large") {
    price *= 2;
  } else {
    price *= 2.5;
  }
  return price;
}

// function showOrder(toBuy) {
//   var order = PizzaToBuy.findPizza(toBuy); 
// }

// User Logic Interface
$(document).ready(function() {
  var pizzaToBuy = new PizzaToBuy();

  $("#pizzaOrder").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("#size").val();
    var inputtedCheese = $("#cheese").val();
    var inputtedMeat = $("#meat").val();
    var inputtedVeggies = $("#vegitables").val();

    var newPizza = new Pizza(inputtedSize,inputtedCheese,inputtedMeat,inputtedVeggies);
    pizzaToBuy.addPizza(newPizza);
    console.log(pizzaToBuy);
    // showOrder(pizzaToBuy);
  });
})