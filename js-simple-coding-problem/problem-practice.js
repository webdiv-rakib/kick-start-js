// 1. Write a function to convert temperature from Celsius to Fahrenheit.
function tempConversion(temp) {
    const result = temp * 9 / 5 + 32;
    return result;
}
const fahrenheit = tempConversion(38);
// console.log('Temperature is fahrenheit:', fahrenheit);




// 2. You are given an array of numbers. Count how many times the a number is repeated in the array.

// ===This one not working========
// function numberOfElements(numbers) {
//     const duplicate = [];
//     for (const num of numbers) {
//         if (duplicate.includes(num) !== false) {
//             duplicate.push(num);
//         }
//     }
//     const dupliLen = duplicate.length;
//     console.log(duplicate);
//     return dupliLen;

// }
// const numbers = numberOfElements([5, 6, 11, 12, 98, 5]);
// console.log('Duplicate number count:', numbers);

function numberOfElements(numbers, find) {
    let count = 0;
    for (const num of numbers) {
        if (num === find) {
            count++;
        }
    }
    return count;
}
const find = 5;
const numbers = [5, 6, 11, 12, 98, 5, 5];
// console.log('Output:', numberOfElements(numbers, find));

// ------Another problem---------
function notExit(array, search) {
    // console.log(array);
    // console.log(search);
    const howManyTimes = 0;
    for (const newArray of array) {
        if (newArray === search) {
            howManyTimes++;
        }
    }
    return howManyTimes;
}
const search = 25;
const array = [5, 6, 11, 12, 15, 98, 5];
const outPut = notExit(array, search);
console.log("Output:", outPut);