let h1 = document.querySelector("h1");

function clickFunction() {
	h1.innerHTML = "Initiate countdown!!!";
}

function downFunction(btn) {
	btn.style.backgroundColor = "red";
	btn.innerHTML = "Oh no!!!!!!!!!"
}

function upFunction(btn) {
	btn.style.backgroundColor = "lightblue";
	btn.innerHTML = "Why did you click??"
}