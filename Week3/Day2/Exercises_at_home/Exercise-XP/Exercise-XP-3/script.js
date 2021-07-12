let inputButton = document.getElementById("submit");
inputButton.addEventListener("click", function calcVolume(event) {
	let radius = parseInt(document.forms[0].elements[0].value);
	let volume = (4*Math.PI*Math.pow(radius, 3)) / 3;
	event.preventDefault(event);
	document.forms[0].elements[1].value = volume;
});




