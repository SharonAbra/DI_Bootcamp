let list = ["blue", "red", "purple", "green", "black"];

for (let i = 0; i < list.length; i++) {
	console.log(`My #${i+1} choice is ${list[i]}`);
}

let prefix;

for (let i = 0; i < list.length; i++) {
	if (i+1 == 1) {
		prefix = "st";
	} else if (i+1 == 2) {
		prefix = "nd";
	} else if (i+1 == 3) {
		prefix = "rd";
	} else {
		prefix = "th";
	}
	console.log(`My #${i+1}${prefix} choice is ${list[i]}`);
}