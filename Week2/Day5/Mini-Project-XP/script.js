// ***** Game without bonus part

// function playTheGame() {
	
// 	let gameOn = confirm("Would you like to play the game? Remember, you will only have 3 guesses.");
// 	let counter = 0;
		
// 	if (!gameOn) {
// 		alert("No problem, Goodbye.");
// 	} else {
	
// 	let userNumber = parseInt(prompt("Please type a number between 0 and 10."));
// 	counter ++;

// 		if (isNaN(userNumber)) {
// 			alert("Sorry, that's not a number. Goodbye.");
// 		} else if (userNumber < 0 || userNumber > 10) {
// 			alert("Sorry, this number is out of range, Goodbye.");
// 		} else {
// 			counter ++;
// 			let computerNumber = Math.floor(Math.random() * 11);
// 			function test(userNumber,computerNumber) {
	
// 				while (counter <= 3) {
// 					if (isNaN(userNumber)) {
// 						break;
// 					}

// 					if (userNumber < computerNumber) {
// 						userNumber = parseInt(prompt("Your number is smaller then the computer’s, guess again."));
// 						counter ++;
// 					} else if (userNumber > computerNumber) {
// 						userNumber = parseInt(prompt("Your number is bigger then the computer’s, guess again."));
// 						counter ++;
// 					} else if (userNumber === computerNumber) {
// 						alert("WINNER");
// 						break;
// 					}
// 				}
// 				alert("Game over, Goodbye.");
// 			}
// 			test(userNumber,computerNumber);
// 		}
// 	}
// }

// ***** Game with bonus part

function playTheGame() {
	
	let gameOn = confirm("Would you like to play the game? Remember, you will only have 3 guesses.");
	let counter = 0;
		
	if (!gameOn) {
		alert("No problem, Goodbye.");
	} else {
	
	let userNumber = parseInt(prompt("Please type a number between 0 and 10."));
	counter ++;
	console.log(counter);

		while (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
			if (isNaN(userNumber)) {
				userNumber = parseInt(prompt("Sorry, that's not a number. Please try again."));	
			} else if (userNumber < 0 || userNumber > 10) {
				userNumber = parseInt(prompt("Sorry, this number is out of range. Please try again."));
			} else {
				break;
			}
		}
	let computerNumber = Math.floor(Math.random() * 11);	
	function test(userNumber,computerNumber) {

		while (counter < 3) {
			if (isNaN(userNumber)) {
				break;
			}

			if (userNumber < computerNumber) {
				userNumber = parseInt(prompt("Your number is smaller then the computer’s, guess again."));
				counter ++;
				console.log(counter);
			} else if (userNumber > computerNumber) {
				userNumber = parseInt(prompt("Your number is bigger then the computer’s, guess again."));
				counter ++;
				console.log(counter);
			} else if (userNumber === computerNumber) {
				alert("WINNER!");
				break;
			}
		}
		alert("Game over, Goodbye.");
	}
		test(userNumber,computerNumber);
	}
}






