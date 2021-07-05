// Excercise 1

let x = 5;
let y = 2;

if (x > y) {
	console.log(`${x} is the biggest number`);
} else if (x < y) {
	console.log(`${y} is the biggest number`);
} else {
	console.log(`The nubers are even.`);
}

// Excercise 2

let newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog === "Chihuahua") {
	console.log("I love Chihuahuas, it’s my favorite dog breed!");
} else {
	console.log("I dont care, I prefer cats...");
}

// Excercise 3

let choice = parseInt(prompt("Type a number"));
if (choice % 2 === 0) {
	console.log(`${choice} is an even number.`)
} else if (choice % 2 !== 0) {
	console.log(`${choice} is an odd number.`)
}

// Excercise 4

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length === 0) {
	console.log("no one os online");
} else if (users.length === 1) {
	console.log(`${users[0]} is online`);
} else if (users.length === 2) {
	console.log(`${users[0]} and ${users[1]} are online`);
} else {
	console.log(`${users[0]}, ${users[1]} and ${users.length-2} more are online`);
}
