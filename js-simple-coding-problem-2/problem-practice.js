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
    // console.log(laptop, tablet, mobile);
    const sum = laptop + tablet + mobile;
    return sum;
    // return laptop + tablet + mobile;
}
const total = calculateElectronicsBudget(35000, 15000, 20000);
// console.log('Total Money Required:', total);




// 4. You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
function findAveragePhonePrice(products) {
    // console.log(products);
    let sum = 0;
    const objectLength = products.length;
    for (const product of products) {
        sum = sum + product.price;
        average = sum / objectLength;
    }
    // console.log('Sum of total products:', sum);
    // console.log('Total items:', objectLength);
    return Math.floor(average);
}
const price = findAveragePhonePrice(phones);
// console.log('Average price of phone:', price);




// 5. For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
function yearlyIncrement(employees) {
    const starting1 = 200000;
    const starting2 = 15000;
    const starting3 = 30000;
    const starting4 = 29000;
    console.log(employees);
    for (const employee of employees) {
        console.log(employee);
        if (employee.experience > 5) {

        }
    }
}
const salary = yearlyIncrement(employees);
console.log("The total salary has to be provided:", salary);