describe('Pizza', function() {
  it("Gets right size of pizza", function() {
  	var newPizza = new Pizza("Large");
    expect(newPizza.size).to.equal("Large");
  });

});
