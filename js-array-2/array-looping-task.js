//Array-looping-tasks
// 1. Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// reverse method:
// colors.reverse();
// console.log(colors);

// for of method: 
const forOfColors = [];
for (const color of colors) {
    // console.log(color);
    forOfColors.unshift(color);
}
// console.log(forOfColors);

// reverse using for loop
const rev_side = [];
for (let i = 0; i < colors.length; i++) {
    const color1 = colors[i];
    rev_side.unshift(color1);
}
// console.log(rev_side);

// reverse side using fo loop
for (let i = colors.length; i > 0; i--) {
    const rong = colors[i];
    // console.log(rong);
}




// 2. Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];
for (const num of numbers) {
    if (num % 2 === 0) {
        // console.log(num);
    }
}




// 3 . Use a for...of loop to concatenate all the elements of an array into a single string.
var names = ['Tom', 'Tim', 'Tin', 'Tik'];
let fullName = '';
for (let name of names) {
    fullName += name;
}
console.log(fullName);




//4. const statement = 'I am a hard working person'