let bankAmount = 1000000;
let vat = 1.17;
let details = [+200, -100, +146, +167, -2900];


let afterTax = details.forEach((item) => {
        if (item < 0) {
            item = item*vat;
        }
        bankAmount = bankAmount+item;
    }
);

console.log(bankAmount);