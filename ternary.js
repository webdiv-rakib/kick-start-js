/**
 * TERNARY ---> three parts
 * structure
 *      ?       :
 *  condition ? do something wheen true : do something when false
 */

// Normal if else
// const age = 20;
// if (age >= 18) {
//     console.log("You can vote");
// }
// else {
//     console.log('You cant vote');
// }
// -------------------------------------------
// let price = 500;
// const isLeader = true;
// if (isLeader === true) {
//     price = 0;
// }
// else {
//     price = price + 100;
// }
// console.log(price);
// ----------------Ternary--------------------
// 
// const age = 15;
// age >= 18 ? console.log('You can vote.') : console.log('You cant vote.');
let price = 1000;
const isLeader = false;
price = isLeader === true ? 0 : price + 100;
console.log(price);