let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
let sentence = epic.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);
console.log(sentence);