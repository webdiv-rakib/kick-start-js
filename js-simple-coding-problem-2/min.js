const prices = [20000, 5000, 10000, 15000, 20000, 25000, 30000];
function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}
const cheap = getMin(prices);
// console.log('Cheapest one is:', cheap);

// ============Highest==============
const marks = [20, 50, 40, 30, 60, 70, 80, 90];
function getMax(numbers) {
    // console.log(numbers);
    let max = numbers[0];
    for (const mark of marks) {
        console.log(mark);
        if (mark > max) {
            max = mark;
        }
    }
    return max;
}
const highest = getMax(marks);
console.log('Highest marks is:', highest);