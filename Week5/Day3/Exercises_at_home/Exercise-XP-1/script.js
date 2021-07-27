const compareToTen = (num) => {
    let compare = new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(num+" is greater than 10, success!");
        } else {
            reject(num +" is less than 10, error!");
        }
    })
    return compare;
}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))
