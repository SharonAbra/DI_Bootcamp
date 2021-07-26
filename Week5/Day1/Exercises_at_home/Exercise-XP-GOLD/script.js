let searchParams = new URLSearchParams(window.location.search);
searchParams = Object.fromEntries(searchParams);
let div = document.createElement("div");
div.innerHTML = searchParams["name"] + " " + searchParams["lastname"];
console.log(searchParams);
document.body.append(div);

