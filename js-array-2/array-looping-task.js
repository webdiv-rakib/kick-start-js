//Array-looping-tasks
// 1. Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// reverse method:
colors.reverse();
console.log(colors);

// for of method: 
const forOfColors = [];
for (const color of colors) {
    console.log(color);
    forOfColors.unshift(color);
}
console.log(forOfColors);

// reverse using for loop
const rev_side = [];
for (let i = 0; i < colors.length; i++) {
    const color1 = colors[i];
    rev_side.unshift(color1);
}
console.log(rev_side);

// reverse side using fo loop
for (let i = colors.length; i > 0; i--) {
    const rong = colors[i];
    console.log(rong);
}




// 2. Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];
for (const num of numbers) {
    if (num % 2 === 0) {
        console.log(num);
    }
}




// 3 . Use a for...of loop to concatenate all the elements of an array into a single string.
var names = ['Tom', 'Tim', 'Tin', 'Tik'];
let fullName = '';
for (let name of names) {
    fullName += name;
}
console.log(fullName);




//4. Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
const statement = 'I am a hard working person'
const reversed = statement.split(' ').reverse().join(' ');
console.log(reversed);




//5. Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.
const givenNumbers = [1, 2, 3];
const copyNumbers = [...givenNumbers];
givenNumbers.reverse();
console.log(givenNumbers);
console.log(copyNumbers);




//6. Given an array of student objects, print each student’s name and marks.
const studentObjects = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90 }
]
for (const studentObject of studentObjects) {
    console.log(studentObject);
}




// 7. Given a 2D array, update the value at second row first item to 99 and print the updated array.
const matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
]
matrix[1][0] = 99;
console.log(matrix);