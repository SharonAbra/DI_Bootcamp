// Excercise 1

let language = prompt("what langauage do you speak?").toLowerCase();

switch (language) {
	case "french":
		console.log("Bonjour")
		break;
	case "english":
		console.log("Hello")
		break;
	case "hebrew":
		console.log("Shalom")
		break;
	default:
		console.log("01110011 01101111 01110010 01110010 01111001")
}

// Excercise 2

let grade = parseInt(prompt("What is your grade?", "type grade here"));

if (grade > 90) {
	console.log("A");
} else if (grade >= 80 && grade <= 90) {
	console.log("B");
} else if (grade >= 70 && grade <= 79) {
	console.log("C");
} else if (grade < 70) {
	console.log("D");
}

// Excercise 3

let userString = prompt("Type a string");

	if (userString.length >= 3 && userString.indexOf("ing") != userString.length-3) {
		userString = userString + "ing";
		console.log(userString);
	} else if (userString.length >= 3 && userString.indexOf("ing") == userString.length-3) {
		userString = userString + "ly";
		console.log(userString);
	} else if (userString.length < 3) {
		console.log(userString);
	}
