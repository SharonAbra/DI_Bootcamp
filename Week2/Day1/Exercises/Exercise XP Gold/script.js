let me = ["my","favorite","color","is","blue"];
let sentence = me.join(" ");
console.log(sentence);

let str1 = "mix";
let str2 = "pod";
let sliced1 = str1.slice(0,2);
let sliced2 = str2.slice(0,2);
str1 = str1.split('mi').join('po')
str2 = str2.split('po').join('mi')
newString = str1+str2;
console.log(newString);

num1 = parseInt(prompt('Please type a number'));
num2 = parseInt(prompt('Please type another number'));
alert(num1+num2);