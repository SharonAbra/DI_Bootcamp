let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

let getCarHonda = carInventory => {
    let firstHonda = carInventory.find(car => car["car_make"] === "Honda");
    let sentence = `This is a ${firstHonda["car_make"]} ${firstHonda["car_model"]} from ${firstHonda["car_year"]}`;
    return sentence;
}

function sortCarInventoryByYear(carInventory) {
    let sortedList = carInventory.sort(function(a, b) {
        return a["car_year"] - b["car_year"];
    });
    return sortedList;
};

//****make the function one-line: */
// make an arrow function
// remove function keyword
// assign the function to a variable
// remove variable name of sort function
// make the outer function one line
// remove return keyword
// make the inner function arrow and one line
//remove function keyword
// remove the ()

//this is the result:
let sortCarInventoryByYear = carInventory => carInventory.sort((a, b) => a["car_year"] - b["car_year"]);

console.log(getCarHonda(inventory));
console.log(sortCarInventoryByYear(inventory));



