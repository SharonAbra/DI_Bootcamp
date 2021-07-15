// a loop to create the grid on the right
function createGrid() {
	for (j = 0; j < 1441; j++) {
		let board = document.querySelector(".board");
		let cell = document.createElement("div");
		cell.classList.add("cell");
		board.appendChild(cell);
		cell.addEventListener("mouseover", giveColor);
	}
}

// calling the function
createGrid();

// a loop to create the pallette on the left
function createPallette() {
	let colorList = ["red", "orangered", "orange", "yellow", "yellowgreen", "lightgreen", "green", "darkturquoise", "cyan", "lightskyblue", "dodgerblue", "blue", "navy", "darkmagenta", "purple", "orchid", "pink", "lightgray", "dimgray", "black", "white"]
	for (i = 0; i < colorList.length; i++) {
		let pallete = document.querySelector(".pallete");
		let box = document.createElement("div");
		box.classList.add(colorList[i]);
		pallete.appendChild(box);
		box.addEventListener("click", getColor);

	}
}
// calling the function
createPallette();

// setting the event for the clear button
let button = document.querySelector("button");
button.addEventListener("click", clear);

// a global variable to represent the chosen color at each point
let currentColor;

// a function to grab a color from the pallete
function getColor(e) {
	currentColor = e.target.getAttribute("class");	
}

// a function to assign the color to a cell
function giveColor(e) {
	if (e.buttons){
		e.target.classList.add(currentColor);
	}
}

// a function to clear the board
function clear(e) {
let cells = document.getElementsByClassName("cell");	
	for (cell of cells) {
		cell.classList.add("white");
	}
	window.location.reload(true);
}