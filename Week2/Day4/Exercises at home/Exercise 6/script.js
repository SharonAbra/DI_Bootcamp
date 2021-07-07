function changeEnough([quarters, dimes, nickels, pennies], price) {

	quarters = quarters * 0.25;
	dimes = dimes * 0.10;
	nickels = nickels * 0.05;
	pennies = pennies * 0.01;
	let sum = quarters + dimes + nickels + pennies;

	if (sum >= price) {
		console.log("true");
		return true;
		 
	} else {
		console.log("false");
		return false;
	}
}

changeEnough([2, 100, 0, 0], 14.11);
changeEnough([0, 0, 20, 5], 0.75);