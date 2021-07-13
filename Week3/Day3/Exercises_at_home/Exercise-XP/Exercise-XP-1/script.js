let id;
let box = document.querySelector("#animate");
let left = 0;


function myMove() {	
	id = setInterval(function() {
		if (left > 349) {
			stop();
		} else {
			left++;
			box.style.left = left + 'px';		
		}
	},30);
}

function stop() {
	clearInterval(id);
}