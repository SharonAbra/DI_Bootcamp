function insertRow() {
	
	let table = document.querySelector("table");
	let newRow = document.createElement("tr");
	let newCell1 = document.createElement("td");
	let newCell2 = document.createElement("td");
	newCell1.innerHTML = "newCell 1";
	newCell2.innerHTML = "newCell 2";
	newRow.appendChild(newCell1);
	newRow.appendChild(newCell2);

	table.appendChild(newRow);
}