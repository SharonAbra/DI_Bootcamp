function checkNumber() {
	for (let i = 0; i < 101; i++) {
		if (i % 2 === 0) {
			console.log("The number" + i + " is even.")
		} else {
			console.log("The number" + i + " is odd.")
		}
	}
}

checkNumber();