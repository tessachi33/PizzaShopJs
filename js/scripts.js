//Gets the size of the pizza, toppings array and set base price of 0
function Pizza(size) {
	this.size = size;
	this.toppings = [];
	this.price = 0;
};

//Gets the array of selected toppings
Pizza.prototype.addTopping = function(topping) {
	this.toppings.push(topping);
};

//Gets the price of pizza based on size and toppings array
Pizza.prototype.getPrice = function() {
	var toppings = ["seitan", "tofu", "potatoes"];
	var total = 0;
	if (this.size == "Large") {
		total += 20;
	} else if (this.size == "Medium") {
		total += 15;
	} else {
		total += 10;
	}
  
	for (var i = 0; i < this.toppings.length; i++) {
		 {
				total += 1;
			}
	}
	return total;
}
