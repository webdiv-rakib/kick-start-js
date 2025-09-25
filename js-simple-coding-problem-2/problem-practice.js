// 1. Find the lowest number in the array below.
const heights = [167, 190, 120, 165, 137];
function lowestHeights(numbers) {
    console.log(numbers);
    let min = numbers[0];
    for (const num of numbers) {
        console.log(num);
        if (min > num) {
            min = num;
        }
    }
    console.log(min);
    return min;
}
const lowest = lowestHeights(heights);
console.log('Lowest Height:', lowest);