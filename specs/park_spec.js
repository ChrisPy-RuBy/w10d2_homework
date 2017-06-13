var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("Park", function(){

  var park;

  beforeEach(function(){
    park = new Park();
    dinosaur = new Dinosaur("Velociraptor", 1.5);
    dinosaur2 = new Dinosaur("Tricerotops", 2.7);
    dinosaur3 = new Dinosaur("Iguanadon", 0.3);
  });

  it("park has enclosure", function() {
    assert.strictEqual(0, park.enclosureArray.length)
  })

  it("check enclosure is empty?", function() {
    assert.strictEqual(0, park.enclosureArray.length)
  })

  it("add dinosaur to enclosure", function() {
    park.addDinosaur(dinosaur);
    assert.strictEqual(1, park.enclosureArray.length)
  })

  it("remove specific dinosaur", function() {
     park.addDinosaur(dinosaur);
     park.removeDinosaurByType("Velociraptor")
     assert.strictEqual(0, park.enclosureArray.length)
  })

  it("remove specific dinosaur", function() {
     park.addDinosaur(dinosaur);
     park.addDinosaur(dinosaur3);
     park.addDinosaur(dinosaur2);
     park.removeDinosaurByType("Iguanadon")
     assert.strictEqual(2, park.enclosureArray.length)
  })

})