function isDivisible() {
	let listOfNumbers = []
	let sum = 0;
	for (let i = 0; i <= 500; i++) {
		if (i % 23 === 0) {
			listOfNumbers.push(i);
			sum = sum + i;
		}
	}
	console.log("the numbers are: " + listOfNumbers);
	console.log("The sum is: " + sum); 
}

isDivisible();

function isDivisible(divisor) {
	let listOfNumbers = []
	let sum = 0;
	for (let i = 0; i <= 500; i++) {
		if (i % divisor === 0) {
			listOfNumbers.push(i);
			sum = sum + i;
		}
	}
	console.log("the numbers are: " + listOfNumbers);
	console.log("The sum is: " + sum); 
}

isDivisible(3);
isDivisible(43);