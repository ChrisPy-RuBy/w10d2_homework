var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("dinosaur", function(){

  var dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur("Velociraptor", 1.5);
  });

  it("get dinosaur type", function() {
    assert.strictEqual("Velociraptor", dinosaur.type)
  })

  it("how many babies per year", function() {
    assert.strictEqual(1.5, dinosaur.numberOfOffspringPerYear)
  } )

})


