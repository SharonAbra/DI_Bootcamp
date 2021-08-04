let listTasks;
let section;
let hr;

function addTask(e) {
	e.preventDefault();
	listTasks = document.querySelector(".listTasks");
	newTask = document.forms[0].elements[0].value;
	section = document.createElement("div");
	section.setAttribute("class", "section");
	let checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	let p = document.createElement("p");
	hr = document.createElement("hr");
	icon = document.createElement("span");
	icon.setAttribute("class","fas fa-times-circle");
	section.appendChild(icon);
	section.appendChild(checkbox);
	section.appendChild(p);
	p.innerHTML = newTask;

		if (newTask !== "") {

			listTasks.appendChild(section);
			listTasks.appendChild(hr);
			document.forms[0].reset();
		}
	icon.addEventListener("click", cancel);
}

function cancel(e) {
	let parent = e.target.parentNode;
	let taskDone = parent.lastElementChild;
	taskDone.style.textDecoration = "line-through";
}

function clearAll() {
	allSections = document.querySelectorAll(".section");
	for (let i = 0; i < allSections.length; i++) {
		listTasks.removeChild(section);
		listTasks.removeChild(hr);
	}
}

let button = document.querySelector(".button");
button.addEventListener("click", addTask);

let clear = document.querySelector(".clear");
clear.addEventListener("click", clearAll);
