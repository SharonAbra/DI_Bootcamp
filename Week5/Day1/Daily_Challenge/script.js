const sendData = (event)=> {
    event.preventDefault();
    let fname = document.querySelectorAll("input")[0].value;
    let lname = document.querySelectorAll("input")[1].value;
    let string = JSON.stringify({fname, lname});
    console.log(string);
}

let form = document.forms[0];
form.addEventListener("submit", sendData);
