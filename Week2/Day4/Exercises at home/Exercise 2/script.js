let age = parseInt(prompt("Waht is your age?", "e.g. 33"));

function checkDriverAge(age) {
	if (age > 18) {
		alert("You are old enough to drive, Powering On. Enjoy the ride!");
	} else if (age === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
	} else {
	alert("Sorry, you are too young to drive this car. Powering off");
	}
}

checkDriverAge(age);