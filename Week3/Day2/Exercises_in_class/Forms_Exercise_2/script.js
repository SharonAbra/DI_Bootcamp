function myFunc() {
	let dropdown = document.getElementById("select1");
	dropdown.selectedIndex = "1";
	let op2 = dropdown.value;
	console.log(op2);

	let newOp = document.createElement("option");
	newOp.value = "work";
	newOp.text = "Work";
	dropdown.add(newOp);
	
	let newOp2 = document.createElement("option");
	newOp2.value = "primary-school";
	newOp2.text = "Primary School";
	dropdown.add(newOp2, dropdown[0]);

	dropdown.selectedIndex = "3";

}

function btnFunc() {
	let dropdown = document.getElementById("select1");
	alert(dropdown.value);
}
