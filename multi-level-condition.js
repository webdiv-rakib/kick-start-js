/**
 * Multi Level Condition
 */
const price = 4000;
if (price >= 5000) {
    // 10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log("Final Amount to pay:", payAmount);
}
else if (price > 2500) {
    // 5% discount
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log("Final Discount:", payAmount);
}
else {
    console.log(price);
}

// --------------Practice----------------
const credit = 5;
const amount = 100000;
if (credit > 12) {
    // 20% waiver
    const waiver = amount * 0.2;
    const pay = amount - waiver;
    console.log("After 20% waiver you have to pay:", pay);
}
else if (credit > 6) {
    // 10% waiver
    const waiver = amount * 0.1;
    const pay = amount - waiver;
    console.log("After 10% waiver you have to pay:", pay);
}
else {
    console.log("You got no waiver you have to pay:", amount);
}