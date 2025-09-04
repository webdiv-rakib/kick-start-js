function add(price1, price2) {
    const total = price1 + price2;
    return total;
}
const bill = add(50, 80);
// console.log("Total Price:", bill);

// shortcut
function add2(price1, price2) {
    return price1 + price2;
}
const bill2 = add2(10, 20);
// console.log('Bill 2:', bill2);

function doMath(num1, num2) {
    const add = num1 + num2;
    const sub = num1 - num2;
    const multi = num1 * num2;
    const diff = num1 / num2;
    return add;
}
const math = doMath(2, 2);
// console.log("Math: ", math);

// ---to find even using function
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(5));
console.log(isEven(10));
