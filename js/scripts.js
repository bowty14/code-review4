// Business logic interface
function PizzaToBuy () {
  this.pizzas = [];
  this.currentId = 0;
  this.price = 0;
  console.log(this.pizzas);
}

PizzaToBuy.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

function Pizza(size,cheese, meat,veggies,price) {
  this.size = size;
  this.cheese = cheese;
  this.meat = meat;
  this.veggies = veggies;
  this.price = price;
}

PizzaToBuy.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PizzaToBuy.prototype.findPizza = function (id) {
  for (var i = 0; i < this.pizzas.length; i++) {
    if (this.pizzas[i]) {
      if (this.pizzas[i].id == id) {
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

function showOrder(toBuy) {
  content = '';
  for (var i = 0; i < toBuy.pizzas.length; i++) {
    content += showPizza(toBuy.pizzas[i]);
    
  }
  $("#output").html(content);
  $("#confirmation").show();
}

function showPizza(pizza) {
  var orderInfo = ("One " + pizza.size + " pizza " + "with " + pizza.cheese + " , " + pizza.meat + " and " + pizza.veggies + " your total is " + pizza.price() + "</br>" + "</br>");
  console.log(showPizza);
  return orderInfo;
  
}

// User Logic Interface
$(document).ready(function() {
  var pizzaToBuy = new PizzaToBuy();

  $("#pizzaOrder").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("#size").val();
    var inputtedCheese = $("#cheese").val();
    var inputtedMeat = $("#meat").val();
    var inputtedVeggies = $("#veggies").val();

    $("#startOrder").click(function() {
      $("#pizzaOrder").show();
    });

    var newPizza = new Pizza(inputtedSize,inputtedCheese,inputtedMeat,inputtedVeggies);
    pizzaToBuy.addPizza(newPizza);
    console.log(pizzaToBuy);
    showOrder(pizzaToBuy);
  });
})