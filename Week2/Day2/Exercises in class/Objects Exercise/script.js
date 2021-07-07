let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5
	},
	prices : {
		apple : 0.5,
		banana : 0.8,
		pear : 0.2
	}
};
userCart["username"] = "Josh";
console.log(userCart);
console.log(userCart["cart"]["pear"]);
console.log(userCart["prices"]["pear"]);
let numberPear = userCart["cart"]["pear"];
let pricePerPear = userCart["prices"]["pear"];
let totalPricePear = numberPear * pricePerPear;
// alert(`The pears cost ${totalPricePear} shekels to ${userCart["username"]}`)

userCart["prices"]["pear"] *= 1.17;
pricePerPear = userCart["prices"]["pear"];
console.log(pricePerPear);

let choice = prompt("Which fruit do you want? Apple, Banana or Pear?").toLowerCase();
console.log(choice);
alert(`The price of ${choice} is ${userCart["prices"][choice]} Shekels.`);

