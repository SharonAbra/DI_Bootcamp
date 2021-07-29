const retrieveData = async () => {
    let fetched = await fetch('http://api.currencylayer.com/list?access_key=dceeb1a1a1bb79530f684d5581c69d62');
    let data = await fetched.json();
    let dropdown = Object.entries(data["currencies"]);
    display(dropdown);
}

const display = (array) => {
    let selectFrom = document.querySelector(".selectFrom");

    for (let i = 0; i < array.length; i++) {
        let option = document.createElement("option");
        option.innerHTML = array[i][0] + " - " + array[i][1];
        selectFrom.appendChild(option);
    }

    for (let i = 0; i < array.length; i++) {
        let selectTo = document.querySelector(".selectTo");
        let option = document.createElement("option");
        option.innerHTML = array[i][0] + " - " + array[i][1];
        selectTo.appendChild(option);
    }
}

const calculate = async () => {
    try{
        let result = document.querySelector(".result");
        result.classList.remove("display");
        result.innerHTML="";
        let amount = document.querySelector(".amountInput").value
        let sourceFrom = document.querySelector(".selectFrom").value.substring(0,3);
        let toCurrency = document.querySelector(".selectTo").value.substring(0,3);
        let url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${sourceFrom}&to_currency=${toCurrency}&apikey=H8U5465C73W24DRO`
        let fetched2 = await fetch(url);
        let data2 = await fetched2.json();
        let currency = data2["Realtime Currency Exchange Rate"]["5. Exchange Rate"]*amount;
        let text = document.createTextNode(`${amount} ${sourceFrom} is equal to ${currency} ${toCurrency}`);
        result.classList.add("display");
        result.appendChild(text);
    }
    catch {
        let result = document.querySelector(".result");
        let text = document.createTextNode("Oops, that was not supposed to happen. Please try again.");
        result.classList.add("display");
        result.appendChild(text);
    }
}

retrieveData();

let button = document.querySelector("button");
button.addEventListener("click", calculate);
let input = document.querySelector(".amountInput");
input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
    calculate();
  });