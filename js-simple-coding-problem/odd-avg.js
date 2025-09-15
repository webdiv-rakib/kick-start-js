/**
 * function takes an array as parameter
 * give me the avg of the odd numbers in the array
 * 
 */
function oddAverage(numbers) {
    const odds = []
    for (const num of numbers) {
        if (num % 2 !== 0) {
            odds.push(num);
        }
    }
    let sum = 0;
    for (const number of odds) {
        sum = sum + number;

    }
    const count = odds.length;
    const oddAvg = sum / count;
    return oddAvg;
}
const numbers = [2, 1, 5, 7, 8, 9, 12, 11, 13, 17, 19, 20, 22];
const avg = oddAverage(numbers);
console.log('average of all odd numbers:', avg);