let listPlanets = ['Mercury', 'Venus', 'Earth', 'Mars',
 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

let Mercury = document.createElement("div");
Mercury.classList.add("planet", "Mercury");
Mercury.style.backgroundColor = "brown";
document.querySelector("section").appendChild(Mercury);

let Venus = document.createElement("div");
Venus.classList.add("planet", "Venus");
Venus.style.backgroundColor = "pink";
document.querySelector("section").appendChild(Venus);

let Earth = document.createElement("div");
Earth.classList.add("planet", "Earth");
Earth.style.backgroundColor = "green";
document.querySelector("section").appendChild(Earth);

let Mars = document.createElement("div");
Mars.classList.add("planet", "Mars");
Mars.style.backgroundColor = "red";
document.querySelector("section").appendChild(Mars);

let Jupiter = document.createElement("div");
Jupiter.classList.add("planet", "Jupiter");
Jupiter.style.backgroundColor = "lightyellow";
document.querySelector("section").appendChild(Jupiter);

let Saturn = document.createElement("div");
Saturn.classList.add("planet", "Saturn");
Saturn.style.backgroundColor = "yellow";
document.querySelector("section").appendChild(Saturn);

let Uranus = document.createElement("div");
Uranus.classList.add("planet", "Uranus");
Uranus.style.backgroundColor = "lightblue";
document.querySelector("section").appendChild(Uranus);

let Neptune = document.createElement("div");
Neptune.classList.add("planet", "Neptune");
Neptune.style.backgroundColor = "blue";
document.querySelector("section").appendChild(Neptune);

let Pluto = document.createElement("div");
Pluto.classList.add("planet", "Pluto");
Pluto.style.backgroundColor = "grey";
document.querySelector("section").appendChild(Pluto);
