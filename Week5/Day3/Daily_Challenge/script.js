let arrayOfWords = ['Pear', 'Peach', 'Mango'];
let complicatedArray = ['Pear', 3, 'Peach', 'Mango']

const makeAllCaps = (array) => {
    let prom = new Promise((resolve, reject) => {
        let capsArray = array.map((item) => {
            if (typeof(item)==='string') {
                return item.toUpperCase();
            } else {
            reject();
            }
        })
        resolve (capsArray);
    })
    return prom;
}

const sortWords = (array) => {
    let prom2 = new Promise((resolve, reject) => {
        let sortedArray = array.sort();
        resolve(sortedArray);
        })
    return prom2;
}

makeAllCaps(arrayOfWords)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log('error: type must be string'))

makeAllCaps(complicatedArray)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log('error: type must be string'))

let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

const toJs = (jsonObj) => {
    let pr = new Promise((resolve, reject) => {
        if (jsonObj === null) {
            reject();
        }else {
        let newObj = JSON.parse(jsonObj);
            resolve(newObj);
        }
    })
    return pr;
}

const toMorse = (morseJs) => {
    let str = prompt("Please type a word or sentence").split("");
    let morseArray = [];
    let pro = new Promise((resolve, reject) => {
        for (i = 0; i < str.length; i++) {
            if (morseJs.hasOwnProperty(i)) {
                morseArray.push(morseJs[str[i]]);
                resolve(morseArray);
            } else {
                reject(error);
            }
        }
    })
    return pro;
}

const joinWords = (array) =>{
    let promi = new Promise((resolve, reject) => {
        resolve(array.join("\n"));
    })
    return promi;
}

toJs(morse)
    .then(toMorse)
    .then(joinWords)
    .then((result) => console.log(result))
    .catch(error => console.log('error: object is empty'))