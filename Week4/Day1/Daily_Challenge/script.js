const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

let newArray = [];
gameInfo.forEach((item) => {
    newArray.push(item["username"]+"!");
});

let bigScore = [];
gameInfo.forEach((item) => {
    if (item["score"] > 5) {
        bigScore.push(item["username"]);
    }
});

let total = 0;
gameInfo.forEach((item) => {
    total = total+item["score"];
})

console.log(newArray);
console.log(bigScore);
console.log(total);
