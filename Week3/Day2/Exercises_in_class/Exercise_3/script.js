let div = document.querySelector("div");
let btn = document.querySelector("button")
div.addEventListener("click", myFunc);
btn.addEventListener("click", colorFunc);
btn.addEventListener("mousedown", upFunc);

function myFunc() {
	div.style.backgroundColor = "red";;
}

function colorFunc(e) {
	btn.style.backgroundColor = "yellow";
	e.stopPropagation()
}

function upFunc() {
	btn.style.border = "3px solid green"
}
