/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// function GameObject(attributes) {
//     this.createdAt = new Date()
//     this.dimensions = attributes.dimensions
//   }
  
//   GameObject.prototype.destroy = function () {
//     return "${this.name} was removed from the game.";
//   }

class GameObjectParent {
    GameObject(attributes) {
        this.createdAt = new Date();
        this.dimensions = attributes.dimensions;
    }
    destroy() {
        console.log("${this.name} was removed from the game.")
    }
}


  
// function CharacterStats(attributes) {
//   this.healthPoints = attributes.healthPoints
//   this.name = attributes.name
//   GameObject.call(this, attributes)
// }

// changed to extends due to code line 53-60

class CharacterStatsChild extends GameObjectParent {
    constructor(ChildAttributes) {
        super(ChildAttributes);
        this.healthPoints = ChildAttributes.healthPoints;
        this.name = ChildAttributes.name;
    }
    takeDamage() {
        return `${this.name} took damage`;
    }
}



// CharacterStats.prototype = Object.create(GameObject.prototype);

// CharacterStats.prototype.takeDamage = function () {
//   return `${this.name} took damage`
// }

// code can be added to the code above 40-49
// line 53 is same as line 42 so no need to add anything



// function Humanoid(attributes) {
//   this.team = attributes.team
//   this.weapons = attributes.weapons
//   this.language = attributes.language
//   CharacterStats.call(this, attributes)
// }

// Humanoid.prototype = Object.create(CharacterStats.prototype);

// Humanoid.prototype.greet = function () {
//   return `${this.name} offers a greeting in ${this.language}`
// }

class HumanoidChild extends CharacterStatsParent {
    constructor(ChildAttributes) {
        super(ChildAttributes);
        this.team = ChildAttributes.team
        this.weapons = ChildAttributes.weapons
        this.language = ChildAttributes.language
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`
    }
}