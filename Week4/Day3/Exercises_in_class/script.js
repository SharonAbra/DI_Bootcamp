
let sp = (string) => string.split('');
let up = (sp) => sp.forEach(element) {
    element.toUpperCase();
    return up;
};
let jo = (up) => up.join('.');
let change = jo(up(sp("john")));
console.log(change);




function split(username){
    let newName = username.split("");
        return newName;
}
function upper(nameArray){
    let upper = nameArray.map(newName => newName.toUpperCase());
        return upper;
}
function join(nameArray2){
    let dot = nameArray2.join(".")
    return dot;
}
console.log(join(upper(split("sasha"))));


// const students = [
// 	{name: 'Rich', score: 33}, 
// 	{name: 'Peter', score: 55}
// ];

// let scores = students.map(student => student["score"]);
// console.log(scores);

// let newArray = students.map((student) => {
//     if (student["score"] > 50) {
//         student["average"] = true;
//     } else {
//         student["average"] = false;       
//     }
//     return student;
// });

// console.log(newArray);
