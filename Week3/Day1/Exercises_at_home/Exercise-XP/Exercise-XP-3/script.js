let div = document.querySelector("div");
div.style.padding = "10px";
div.style.backgroundColor = "lightblue";
let list = document.querySelector("ul");
let john = list.children[0];
// list.removeChild(john); 
// I removed the line above as to not disturb the conditional part of the exercise.
let pete = list.children[1];
pete.style.border = "1px solid black";
document.body.style.fontSize = "30px";

let user1 = list.children[0];
let user2 = list.children[1];

if (div.style.backgroundColor == "lightblue") {
	alert(`Hello ${user1.innerHTML} and ${user2.innerHTML}`);
}