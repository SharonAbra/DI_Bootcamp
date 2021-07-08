
function beerSong(bottles) {
	bottles = parseInt(prompt("How many bottles would you like to begin the song with?", "choose a number between 1 and 99..."))
		
	console.log(`${bottles} bottles of beer on the wall`);
	console.log(`${bottles} bottles of beer`);
	console.log(`Take 1 down, pass it around`);
	console.log(`${bottles- 1} bottles of beer on the wall`);
	
	for (let i = 1; i < (bottles-i); i++) {
		console.log(`${bottles-i} bottles of beer on the wall`);
		console.log(`${bottles-i} bottles of beer`);
		console.log(`Take ${i+1} down, pass them around`);
		bottles = bottles-(i);
		console.log(`${bottles-(i+1)} bottles of beer on the wall`);
	}

	console.log("very few bottles of beer on the wall");
	console.log("very few bottles of beer");
	console.log("we took so many down, there's not enough to pass around");
	console.log("let's fight it out in a big bar brawl!");
}

beerSong();