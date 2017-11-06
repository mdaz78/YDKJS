const TAX_RATE = 9,
      PHONE_PRICE = 50,
      ACCESSORY_PRICE = 20,
      SPENDING_THRESHOLD = 500;

let bankBalance = 1000;
let amount = 0;

function taxAmount(amount) {
    return amount * TAX_RATE;
}

function formatAmount(amount) {
    return '$' + amount;
}


while (amount < bankBalance) {
    amount += PHONE_PRICE;

    if (amount < SPENDING_THRESHOLD) {
        amount += ACCESSORY_PRICE;
    }
}
amount += taxAmount(amount);
console.log("Your purchase : " + formatAmount(amount));

if (amount > bankBalance) {
    console.log("You can't afford it!");
}
