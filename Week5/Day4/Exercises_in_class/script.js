const getNames = (name1, name2) => {
    let x = new Promise((resolve, reject) => {
     if (typeof name1 !== 'string' || typeof name2 !== 'string') {
         reject("not a string!")
     } else {
         let array = [name1, name2];
        resolve(array);
     }
    })
    return x;
  }

  const getNoun = (noun) => {
    let y = new Promise((resolve, reject) => {
     if (noun.length < 3) {
         reject("too short!")
     } else {
        resolve(noun);
     }
    })
    return y;
  }

  const getCity = (city) => {
    let z = new Promise((resolve, reject) => {
    let cityArray = city.split('');
    let firstLetter = cityArray[0];
     if (firstLetter !== firstLetter.toUpperCase()) {
         reject("no uppercase letter!")
     } else {
        resolve(city);
     }
    })
    return z;
  }

  const getVerb = (verb) => {
    let a = new Promise((resolve, reject) => {
     let verbArray = verb.split('');
     let verbLength = verbArray.length;
     if (verbArray[verbLength-1]!=='g' && verbArray[verbLength-2] !=='n' && verbArray[verbLength-3] !=='i') {
         reject("no ing!")
     } else {
        resolve(verb);
     }
    })
    return a;
  }

const sentence = async () => {
    let names = await getNames("Beyonce", "Barack Obama")
    let noun = await getNoun("football")
    let city = await getCity("Paris")
    let verb = await getVerb("playing")
    console.log(`${names[0]} is ${verb} ${noun} with ${names[1]} in ${city}`);
}

sentence();