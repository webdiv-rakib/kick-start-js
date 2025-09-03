const persons = ['rakib', 'nokib', 'sakib', 'akib', 'dakib'];
const sortedPerson = persons.sort(); //not working properly
console.log(sortedPerson);

// sort --->
const numbers = [2, 8, 10, 1, 78, 65, 51, 44, 31, 26, 81, 99];
const sortedNumber = numbers.sort(); //not working properly
console.log(sortedNumber);

/**
 * 2 types of sort
 * 1. Ascending order ---> smaller to large: [2,3,4,5,6]
 * 2. Descending order ---> larger to smaller: [10,9,8,7,6]
 */

// Ascending order sort
const num1 = [4, 7, 12, 8, 43, 6, 1];
const num1_asc = num1.sort(); //not working properly
const numbers_asc = numbers.sort(function (a, b) { return a - b });
const numbers_dsc = numbers.sort(function (a, b) { return b - a });
console.log(numbers_asc);
console.log(numbers_dsc);
console.log(num1_asc);