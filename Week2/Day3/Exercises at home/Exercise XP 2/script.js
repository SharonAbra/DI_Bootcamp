let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people);
people.splice(2, 1, "Jason");
console.log(people);
people.push("Sharon");
console.log(people);

people.forEach(person => {console.log(person)});

let end = people.indexOf("Jason");
for (let i = 0; i < end +1; i++) {
	console.log(people[i]);
}

let newArray = [];
newArray = people.slice(1,people.length-1);
console.log(newArray);

console.log(people.indexOf("Mary"));
console.log(`The index of 'foo' is ${people.indexOf("-1")}.`);

let last = people[people.length-1];
console.log(last);