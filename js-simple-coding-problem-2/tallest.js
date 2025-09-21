// ---------Maximum------------
function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
const heights = [65, 66, 68, 72, 78, 60];
const max = getMax(heights);
// console.log('Max value is:', max);

// ----------Minimum-----------
function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}
const numbers = [99, 88, 77, 66, 55, 44, 33, 22, 11, 1];
const min = getMin(numbers);
console.log('Minimum value is:', min);