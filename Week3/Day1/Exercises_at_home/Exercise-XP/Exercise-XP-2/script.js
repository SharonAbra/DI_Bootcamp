let pete = document.querySelector("ul").children[1];
pete.innerHTML = "Richard";

let firstList = document.querySelector("ul");
firstList.children[0].innerHTML = "Sharon";
let secondList = document.querySelector("ul").nextElementSibling;
secondList.children[0].innerHTML = "Sharon";

let newLi = document.createElement("li");
let newContent = document.createTextNode("Hey students");
let newLi2 = document.createElement("li");
let newContent2 = document.createTextNode("Hey students");
newLi.append(newContent);
newLi2.append(newContent2);
firstList.appendChild(newLi);
secondList.appendChild(newLi2);

let sarah = secondList.children[1];
secondList.removeChild(sarah);

firstList.classList.add("student_list");
secondList.classList.add("student_list");

firstList.classList.add("university", "attendance");