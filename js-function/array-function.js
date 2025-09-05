/**
 * Objective: write a function to give me the sum of all numbers in array
 * step-1: declare a function
 * step-2: call check whether the function is called properly
 * step-3: set a parameter(s)
 * step-4: pass the parameter(s), check whether parameter is passed in a proper format
 * step-5: do the function tasks (step by step)
 */
function sumOfNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        // console.log(number);
        sum = sum + number;
    }
    return sum;
}
const numbs = [22, 33, 44, 55, 66, 77, 88, 99];
const sum = sumOfNumbers(numbs);
// console.log("Sum of numbers is:", sum);

// ==========Example-Subtract==========
function subOfNumbers(numbers) {
    let sub = 0;
    // console.log(numbers);
    for (const num of numbers) {
        sub = sub - num;
    }
    return sub;
}
const numberOfArray = [10, -20, 20, -5, 15, 2];
const array = subOfNumbers(numberOfArray);
// console.log('Substract of array:', array);


// =========Example-Multiplication==========
function multiOfNumbers(number) {
    console.log(number);
    let multi = 1;
    for (const num of number) {
        multi = multi * num;
    }
    return multi;
}
const multi = [2, 2, 2, 2];
const multiArray = multiOfNumbers(multi);
console.log("Multi of numbers: ", multiArray);
