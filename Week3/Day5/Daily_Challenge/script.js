button = document.querySelector("button");
button.addEventListener("click", showMe);
let idArray = [2, 3, 4, 8, 12, 15, 19, 22, 23, 24, 25, 26, 29, 33, 36, 40, 43, 47 ];
let cell;

function showMe() {

	for (let j = 0; j < 50; j++) {
		let container = document.querySelector(".container");
		let cell = document.createElement("div");
		cell.classList.add("cell");
		cell.setAttribute("id", "id"+j);
		container.appendChild(cell);
		let idCell = cell.getAttribute("id");
	}
	
	for (let i of idArray) {
		let grab = document.querySelector(`#id${i}`);
		grab.innerHTML = "*";
	}
}
