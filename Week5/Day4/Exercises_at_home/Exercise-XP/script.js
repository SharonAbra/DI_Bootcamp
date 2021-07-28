fetch("https://swapi.dev/api/starships/9/")
    .then(response => response.json())
    .then(console.log);

let url = "https://swapi.dev/api/starships/9/";

const promise = async () => {
    let fetched = await fetch(url);
    let response = await fetched.json();
    console.log(response);
}

promise();

// part 2:

// calling
// resolved

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();