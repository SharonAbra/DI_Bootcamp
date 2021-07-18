function capitalize(myName = retrieveIt()) {
    result = myName.toUpperCase();
    console.log(result);
}

function retrieveIt() {
    let userName = prompt("What is your name?")
    return userName;
}

capitalize("john");

function compare(a, b, operator) {
    if (operator === "+") {
        return a+b;
    } else if (operator === "-") {
        return a-b;
    }
    return [a,b];
}

const compare = (a, b, operator) => {
    if (operator === "+") {
        return a+b;
    } else if (operator === "-") {
        return a-b;
    }
    return [a,b];
}

