let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let sortedNames = names.sort();
let initalsList = [];

for (let i = 0; i < names.length; i++) {
	initalsList.push((names[i][0]));
}

let societyName = initalsList.join("");
console.log(societyName);