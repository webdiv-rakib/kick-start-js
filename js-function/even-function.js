/**
 * create function that will return only the even numbers
 * return the sum of even numbers
 */
function evenNumbersOnly(numbers) {
    let even = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            // console.log(number);
            even.push(number);
        }
    }
    return even;
}
const numbers = [5, 8, 91, 24, 6];
const evens = evenNumbersOnly(numbers);
// console.log("Even Numbers are: ", evens);

// ========================================
// only even numbers and their sum
function sumOfEvenNumbers(numbers) {
    // console.log(numbers);
    // let evens = [];
    let sum = 0;
    for (const num of numbers) {
        // console.log(num);
        if (num % 2 === 0) {
            // console.log(num);
            sum = sum + num;
        }
    }
    return sum;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const even = sumOfEvenNumbers(array);
console.log("Sum of Even: ", even);