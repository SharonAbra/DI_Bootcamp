function tipMuch() {
	let billAmount = parseInt(prompt("how much was the bill?"));
	let tip;
	if (billAmount < 50) {
		tip = billAmount * 0.2;
	} else if (billAmount >= 50 && billAmount <= 200) {
		tip = billAmount * 0.15;
	} else {
		tip = billAmount * 0.1;
	}
	result = `The tip is ${tip} and the total amount is ${billAmount + tip}.`
	alert(result);
}

tipMuch();