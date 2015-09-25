describe('Pizza', function() {
  it("Gets right size of Pizza", function() {
  	var newPizza = new Pizza("Large");
    expect(newPizza.size).to.equal("Large");
  });

  it("Returns right array of toppings", function() {
  	var newPizza = new Pizza("Large");
  	newPizza.addTopping("seitan");
  	newPizza.addTopping("tofu");
    expect(newPizza.toppings).to.eql(["seitan", "tofu"]);
  });

  it("Returns right price of pizza", function() {
  	var newPizza = new Pizza("Large");
    expect(newPizza.getPrice()).to.equal(20);
  });

});
