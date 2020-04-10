function PizzaToBuy () {
  this.pizzas = [];
  this.currentId = 0;
  console.log("PizzaToBuy", PizzaToBuy);
}

PizzaToBuy.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

