let newLi = document.createElement("li");
let newContent = document.createTextNode("Logout");
newLi.append(newContent);
document.querySelector("ul").appendChild(newLi);

let firstLi = document.querySelector("li");
let lastLi = document.querySelector("ul").lastElementChild;
console.log(firstLi.textContent);
console.log(lastLi.textContent);
