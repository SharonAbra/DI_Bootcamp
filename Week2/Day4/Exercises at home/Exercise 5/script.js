let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket() {
    let userSelection = prompt("Select an item");
        if (userSelection in amazonBasket) {
            console.log("The item is in the basket.");
        } else {
            console.log("The item is not in the basket.");
        }
}

checkBasket();