let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

let violet = colors.includes("violet");
console.log(violet);

colors.forEach((item, position) => {
    console.log(`${position+1}# choice is ${item}.`);
});

