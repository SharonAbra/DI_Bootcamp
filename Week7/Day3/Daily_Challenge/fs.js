const totalSteps = (data) => {
    const array = data.split('');
    let positionCounter = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] === '>') {
            positionCounter++;
        } else {
            positionCounter--;
        }
    }
    return positionCounter;
}

const firstTime = (data) => {
    const array = data.split('');
    let positionCounter = 0;
    let stepCounter;
    for (let i = 0; i < array.length; i++){
        stepCounter = i;
        if (positionCounter === -1) {
            break;
        } else if (array[i] === '>') {
            positionCounter++;
        } else if  (array[i] === '<') {
            positionCounter--;
        }
    }
    return stepCounter;
}


let fs = require('fs');

fs.readFile('text.txt', function (err, data) {
    if (err) {
        console.log(err.message)
    } else {
        console.log(totalSteps(data.toString()));
        console.log(firstTime(data.toString()));
    }
});