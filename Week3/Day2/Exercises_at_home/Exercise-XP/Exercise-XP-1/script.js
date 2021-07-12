let article = document.querySelector("article");
let lastP = document.querySelector("article").lastElementChild;
article.removeChild(lastP);

let h2 = document.querySelector("h2");
h2.addEventListener("click", function change() {
	h2.style.backgroundColor = "red";
});

let h1 = document.querySelector("h1");
h1.style.fontSize = (Math.floor(Math.random() * 101) + "px");

let h3 = document.querySelector("h3");
h3.addEventListener("click", function hide() {
	h3.style.display = "none";
});

let btn = document.querySelector(".bold");
btn.addEventListener("click", function bold() {
	let paragraphs = document.querySelectorAll("p");
	paragraphs.forEach(p => p.style.fontWeight = "bold");
});

let submit = document.querySelector("#submit");
submit.addEventListener("click", function submit(event) {
	
	let form = document.forms[0];
	let valueFirst = form.elements[0].value;
	let valueSecond = form.elements[1].value;
	let table = document.createElement("table");
	let newRow = document.createElement("tr");
	let newCell1 = document.createElement("td");
	let newCell2 = document.createElement("td");
	let div = document.querySelector("div");
				
	if (valueFirst !== "" && valueSecond !== "") {
	table.style.border = "2px solid black";
	newCell1.style.border= "2px solid black"
	newCell2.style.border= "2px solid black"
	table.appendChild(newRow);
	newRow.appendChild(newCell1);
	newRow.appendChild(newCell2);
	div.appendChild(table);
	newCell1.innerHTML = valueFirst;
	newCell2.innerHTML = valueSecond;
	}
	event.preventDefault(event);
});

let secondP = document.querySelector("article").children[5];
secondP.addEventListener("mouseover", function fade() {
	secondP.style.opacity = "0";
	secondP.style.animationDuration = "3s";
	
})