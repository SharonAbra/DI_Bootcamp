let timer = document.querySelector("span");

timeOut = function() {
	let currentTime = parseInt(timer.innerHTML);
	if (currentTime > 0) {
		timer.innerHTML = parseInt(timer.innerHTML) -1;
	} else {
		clearInterval(count)
	}
}

let count = setInterval(timeOut,1000);