// function to fetch the api data for currency dropdown list
const retrieveData = async () => {
    let fetched = await fetch('http://api.currencylayer.com/list?access_key=dceeb1a1a1bb79530f684d5581c69d62');
    let data = await fetched.json();
    let dropdown = Object.entries(data["currencies"]);
    display(dropdown);
}

// function to display the dropdown list
const display = (array) => {
    let selectFrom = document.querySelector(".selectFrom");
    // first dropdown: "from"
    for (let i = 0; i < array.length; i++) {
        let option = document.createElement("option");
        option.innerHTML = array[i][0] + " - " + array[i][1];
        selectFrom.appendChild(option);
    }
    // second dropdown: "to"
    for (let i = 0; i < array.length; i++) {
        let selectTo = document.querySelector(".selectTo");
        let option = document.createElement("option");
        option.innerHTML = array[i][0] + " - " + array[i][1];
        selectTo.appendChild(option);
    }
}

// function to calculate the conversion
const calculate = async () => {
    try{
        // every click resets the previous result and style
        let result = document.querySelector(".result");
        result.classList.remove("display");
        result.innerHTML="";
        // retrieve the currencies and the amount selected by the user (only initials like USD)
        let amount = document.querySelector(".amountInput").value
        let sourceFrom = document.querySelector(".selectFrom").value.substring(0,3);
        let toCurrency = document.querySelector(".selectTo").value.substring(0,3);
        // retrieve the api data for real time rates according to user selection
        let url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${sourceFrom}&to_currency=${toCurrency}&apikey=H8U5465C73W24DRO`
        let fetched2 = await fetch(url);
        let data2 = await fetched2.json();
        // extract the info from the object and multiply by the chosen amount
        let currency = data2["Realtime Currency Exchange Rate"]["5. Exchange Rate"]*amount;
        // display the result - 2 digits after decimal point
        currency = currency.toFixed(2);
        // append result to webpage
        let text = document.createTextNode(`${amount} ${sourceFrom} is equal to ${currency} ${toCurrency}`);
        result.classList.add("display");
        result.appendChild(text);
    }
    catch {
        // append error message to webpage
        let result = document.querySelector(".result");
        let text = document.createTextNode("Oops, that was not supposed to happen. Please try again.");
        result.classList.add("display");
        result.appendChild(text);
    }
}

// create event for button
let button = document.querySelector("button");
button.addEventListener("click", calculate);
// create event for enter key
let input = document.querySelector(".amountInput");
input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
    calculate();
  });

// call this function to present dropdown lists on page load
retrieveData();