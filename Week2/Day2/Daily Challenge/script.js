let sentence = "The movie is not that bad I like it";
let words = sentence.split(" ");
let wordNot = words.indexOf("not");
let wordBad = words.indexOf("bad");

if (wordNot < wordBad) {
	words.splice(wordNot, wordBad-wordNot+1, "good");

	newSentence = words.join(" ");
	console.log(newSentence);
} else {
	console.log(sentence);
}