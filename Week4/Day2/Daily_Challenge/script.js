let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
console.log(groceries);
groceries2 = groceries;
groceries.totalPrice = "35$";
groceries.other.payed = false;
console.log(groceries);
console.log(groceries2);