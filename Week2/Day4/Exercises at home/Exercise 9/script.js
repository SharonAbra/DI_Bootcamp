
// number 1

function hotelCost() {
	
	let nights;
	let total;

	while (isNaN(nights)) {
		nights = parseInt(prompt("How many nights will you stay with us?"));
	};

	total = nights * 140;
	return total;
}

// number 2

function planeRideCost() {
	let price;
	let destination = prompt("What is your destination?").toLowerCase();

	if (destination === "london") {
		price = "183$";
	} else if (destination === "paris") {
		price = "220$";
	} else {
		price = "300$";
	}
	return price;	
}

// number 3

function rentalCarCost() {
	let days;
	let total;
	while (isNaN(days)) {
	days = parseInt(prompt("How many days would like to rent te car?"));
	};

	total = days * 40;
	return total;
}

// number 4

function totalVacationCost() {
	console.log(`The car cost is ${rentalCarCost()}, the hotel cost is ${hotelCost()} and the plane tickets cost ${planeRideCost()}.`);
}

totalVacationCost();