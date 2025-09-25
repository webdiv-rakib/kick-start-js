// 1. Find the lowest number in the array below.
const heights = [167, 190, 120, 165, 137];
function lowestHeights(numbers) {
    // console.log(numbers);
    let min = numbers[0];
    for (const num of numbers) {
        // console.log(num);
        if (min > num) {
            min = num;
        }
    }
    // console.log(min);
    return min;
}
const lowest = lowestHeights(heights);
// console.log('Lowest Height:', lowest);




// 2. Find the friend with the smallest name.
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function smallestName(names) {
    let small = names[0];
    for (const friend of names) {
        if (friend.length < small.length) {
            small = friend;
        }
    }
    return small;
}
const name = smallestName(friends);
// console.log('Smallest name is:', name);




// 3. Your task is to calculate the total budget required to buy electronics:
function calculateElectronicsBudget(laptop, tablet, mobile) {
    console.log(laptop, tablet, mobile);
    const sum = laptop + tablet + mobile;
    return sum;
    // return laptop + tablet + mobile;
}
const total = calculateElectronicsBudget(35000, 15000, 20000);
console.log('Total Money Required:', total);