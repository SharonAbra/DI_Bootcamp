let target = document.querySelector("#target")
let box = document.querySelector("#drag");
box.setAttribute("draggable", "true");

box.addEventListener("dragstart", dragStart);
box.addEventListener("drag", drag);
box.addEventListener("dragend", dragEnd)
target.addEventListener("dragenter", dragEnter);
target.addEventListener("dragover", dragOver)
target.addEventListener("dragleave", dragLeave);
target.addEventListener("drop", drop)

function dragStart(event) {
	event.dataTransfer.setData("text/html", event.target.id);
};

function drag (event) {
	event.target.classList.add("during");
};

function dragEnd(event) {
	event.target.classList.remove("during");
};

function dragEnter(event) {
	event.target.classList.add("enter");
};

function dragOver(event) {
	event.preventDefault();
}

function dragLeave(event) {
	event.target.classList.remove("enter");
};

function drop(event) {
	event.preventDefault();
	let data = event.dataTransfer.getData("text/html");
	let box = document.getElementById(data);
  	event.target.appendChild(box);
  	event.target.classList.remove("enter");
};

