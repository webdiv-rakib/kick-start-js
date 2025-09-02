const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 1. short cut method to do reverse;
numbers.reverse();
console.log(numbers);

numbers.reverse();
console.log(numbers);

// 2. reverse using for of and unshift;
const rev_numbers = [];
for (const num of numbers) {
    console.log(num);
    rev_numbers.unshift(num);
}
console.log(rev_numbers);

// 3. reverse using for loop;
const reversed_numbers = [];
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    reversed_numbers.unshift(num);
}
console.log(reversed_numbers);

// 4. reverse side for loop;
for (let i = numbers.length - 1; i >= 0; i--) {
    const num = numbers[i];
    console.log(num);
}