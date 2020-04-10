function PizzaToBuy () {
  this.pizzas = [];
  this.currentId = 0;
  console.log("PizzaToBuy", PizzaToBuy);
}

PizzaToBuy.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

function Pizza(small, medium,large,XL) {
  this.small = small;
  this.medium = medium;
  this.large = large;
  this.XL = XL;
}