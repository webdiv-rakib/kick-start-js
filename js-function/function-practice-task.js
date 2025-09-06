// 1. Take four parameters. Multiply the four numbers and then return the result
function multiply(num1, num2, num3, num4) {
    // console.log(num1, num2, num3, num3, num4);
    const multi = num1 * num2 * num3 * num4;
    return multi;
}
const multi = multiply(2, 4, 6, 8);
// console.log(multi);




// 2. Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function doMultiDiv(number) {
    if (number % 2 === 0) {
        const result = number * 2;
        return result;
    }
    else {
        const result = number / 2;
        return result;
    }
}
const number = doMultiDiv(99);
// console.log(number);




// 3. Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(numbers) {
    // console.log(numbers);
    let sum = 0;
    let average = 0;
    const len = numbers.length;
    for (const num of numbers) {
        // console.log(num);
        sum = sum + num;
        average = sum / len;
    }
    return average;
}
const avg = make_avg([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log("Sum of numbers:", avg);




// 4. Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
function count_zero(strs) {
    let count = 0;
    for (const str of strs) {
        // console.log(str);
        if (str === '0') {
            count++;
        }
    }
    return count;
}
const totalZero = count_zero("0101010101010101010101111000111100010101001100001000110001");
// console.log("Total zero in given string:", totalZero);




// 5. Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(number) {
    console.log(number);
    if (number % 2 === 0) {
        return "Even";
    }
    return "Odd";
}
const oddEven = odd_even(5);
console.log("the given number is:", oddEven);