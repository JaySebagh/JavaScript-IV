/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

function GameObject(attributes) {
    this.createdAt = new Date()
    this.dimensions = attributes.dimensions
  }
  
  GameObject.prototype.destroy = function () {
    return "${this.name} was removed from the game.";
  }


  
function CharacterStats(attributes) {
  this.healthPoints = attributes.healthPoints
  this.name = attributes.name
  GameObject.call(this, attributes)
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage`
}




function Humanoid(attributes) {
  this.team = attributes.team
  this.weapons = attributes.weapons
  this.language = attributes.language
  CharacterStats.call(this, attributes)
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeeting in ${this.language}`
}