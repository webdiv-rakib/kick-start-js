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
console.log('Cheapest one is:', cheap);