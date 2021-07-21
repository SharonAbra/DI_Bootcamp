// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 72,
//         english: 63
//     }
// };

// let studentClone = {...student};
// let deepClone = {...student, scores: {...student.scores}}
// student.scores.maths = 30
// console.log(student);
// console.log(studentClone);
// console.log(deepClone);

// Copy the object into another one (1 spread opeator)
// To allow copying the nested object, use 2 spread operator
// Create a new object that is equal to the student object, with another property called goodstudent = true

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

killerRabbit.speak("I will kill you");
blackRabbit.speak("I'm black and lonely");
