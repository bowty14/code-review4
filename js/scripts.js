function PizzaToBuy () {
  this.pizzas = [];
  this.currentId = 0;
  console.log("PizzaToBuy", PizzaToBuy);
}

PizzaToBuy.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

function Pizza(size) {
  this.size = size;
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

