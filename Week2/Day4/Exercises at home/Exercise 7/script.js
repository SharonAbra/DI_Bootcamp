let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
};  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}; 

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let price = 0;
    for (let i = 0; i < shoppingList.length; i++) {
        if (stock[shoppingList[i]] > 0) {
            price = price + prices[shoppingList[i]];
            stock[shoppingList[i]] = stock[shoppingList[i]] -1;
        }
    }
    console.log(price);
    return price;
}

myBill(shoppingList);
