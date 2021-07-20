// 1.Create a one line function that receives two numbers
//  as parameters and returns the sum.

let mySum = (x, y) => x + y;

//2
const addTo = x => y => x + y;
var addToTen = addTo(10);
addToTen(3);

//my prediction is 13 


//3
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

//my prediction is 31

//4
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
//my prediction is 17, and also the first line is redundant I think.

//5
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

//my prediction is 16