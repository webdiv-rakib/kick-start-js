//Array-looping-tasks
// 1. Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// reverse method:
// colors.reverse();
// console.log(colors);

// for of method: 
const forOfColors = [];
for (const color of colors) {
    console.log(color);
    forOfColors.unshift(color);
}
console.log(forOfColors);