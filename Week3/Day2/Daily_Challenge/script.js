function tellStory() {
	let inputs = document.getElementsByTagName("input");
	let words = [];
	for (let i = 0; i < inputs.length; i++) {
		while (inputs[i].value === "") {
		alert("Please fill out all the fields");
		return;
	}
		words.push(inputs[i].value);
	}
	let span = document.querySelector("span");
	span.innerHTML = `This is a story about a ${words[0]} who finally decided to ${words[3]}. The experience was ${words[1]}. But please don't tell this story to ${words[2]}, because it may happen at ${words[4]} too!`;
}

let button = document.querySelector("button");
button.addEventListener("click",tellStory);
