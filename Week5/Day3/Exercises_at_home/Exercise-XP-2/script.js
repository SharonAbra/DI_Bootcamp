let myFunc = () => {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success");
            reject("error");
        }, 4000);
    })
    return myPromise;
}

myFunc().then(result => console.log(result));
myFunc().catch(error => console.log('Ooops something went wrong '+error));


let myFunc = () => {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('success'), 4000);
    })
    return myPromise;
}

myFunc().then(result => console.log(result));
myFunc().catch(error => console.log('Ooops something went wrong '+error));