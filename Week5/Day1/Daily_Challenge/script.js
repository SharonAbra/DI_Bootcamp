const sendData = (event)=> {
    event.preventDefault();
    let fname = document.querySelectorAll("input")[0].value;
    let lname = document.querySelectorAll("input")[1].value;
    let string = JSON.stringify({fname, lname});
    console.log(string);
}

let form = document.forms[0];
form.addEventListener("submit", sendData);


// let searchParams = new URLSearchParams(window.location.search)
// searchParams = Object.fromEntries(searchParams)
// document.body.append(JSON.stringify(searchParams))