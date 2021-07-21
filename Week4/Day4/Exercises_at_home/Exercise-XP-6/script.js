// [2] === [2] 
// {} === {}

// false and false

const object1 = { number: 5 }; // 5
const object2 = object1; // 5
const object3 = object2; // 5
const object4 = { number: 5}; //5
object1.number = 4; // will change the value of the first three objects to 4


class Animal {
    constructor(animalName, type, color) {
    this.animalName = animalName;
    this.type = type;
    this.color = color;
    }
}

class Mamal extends Animal {
    constructor(animalName, type, color) {
    super(animalName, type, color);
    }
    sound() {
        return `Hi, I am ${this.animalName}, I am a ${this.type} and my color is ${this.color}`;
    }
}

let cow = new Mamal("Miriam", "cow", "brown");
console.log(cow.sound());