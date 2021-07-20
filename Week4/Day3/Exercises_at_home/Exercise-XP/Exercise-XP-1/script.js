// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//my prediction: ['bread', "carrot", "potato", 'chicken', "apple", "orange"]

// ------2------
const country = "USA";
console.log([...country]);
//my prediction: ["U", "S", "A"]

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
//my prediction: [",", ","] 
