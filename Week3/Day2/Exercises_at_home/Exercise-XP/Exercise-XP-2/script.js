

function getBold_items() {
	let bolds = document.getElementsByTagName("strong");
	return bolds;
};

let boldsList = getBold_items();

function highlight() {
	for (let item of boldsList) {	
		item.style.color = "blue";
	}
};

function return_normal() {
	for (let item of boldsList) {	
		item.style.color = "black";
	}
};

let p = document.querySelector("p");
p.addEventListener("mouseover", highlight);
p.addEventListener("mouseout", return_normal);
