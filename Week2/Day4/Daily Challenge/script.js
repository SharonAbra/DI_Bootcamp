function stars () {

let response = prompt("Please type several words, seperated by commas", "for example: cat, apple, box");
let wordList = response.split(", ");
let longestWordLength = 0;

for (let i = 0; i < wordList.length; i++) {
	if (wordList[i].length > longestWordLength) {
		longestWordLength = wordList[i].length;
	}
	console.log(longestWordLength);
}

console.log("*".repeat(longestWordLength));
wordList.forEach (item => console.log(`*  ${item}  *`));
console.log("*".repeat(longestWordLength));
}

stars();
