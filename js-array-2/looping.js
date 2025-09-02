/**
 * Looping Technique
 * 1. for loop
 * 2. while loop
 * 3. do while ---> ignore this one
 * 4. for of ---> array loop korar jonno
 * 5. for in ---> object loop korar jonno
 */
const friends = ['Elon', 'Bill', 'Mark', 'Waren'];
for (const friend of friends) {
    // console.log(friend);
}

for (let i = 0; i < friends.length; i++) {
    // console.log(i);
    // console.log(friends[i]);
}

const numbers = [1, 3, 5, 7, 89, 41, 21, 33, 45, 57, 21, 11, 65, 71, 91];
for (const number of numbers) {
    // console.log(number);
}
for (let i = 0; i < numbers.length; i++) {
    console.log("Index Number: ", i, 'Index that contain number: ', numbers[i]);
}