var Park = function() {
  this.enclosureArray = []
  this.addDinosaur = function() {
    this.enclosureArray.push(dinosaur);
  }
   this.removeDinosaurByType = function(type) {
   var index = 0
   for (dinosaur in this.enclosureArray) {
       if (dinosaur.type == type)
        index = this.enclosureArray.indexOf(type)
   } 
   this.enclosureArray.splice(index,1)
}
}

module.exports = Park;