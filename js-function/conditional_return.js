// ---------to find even using function return------
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(50));
// ----------find out odd--------
function isOdd(number) {
    if (number % 2 !== 0) {
        return true;
    }
    return false;
}
console.log(isOdd(10));