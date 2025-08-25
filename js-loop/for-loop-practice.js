/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/
for (let i = 1; i <= 60; i++) {
    console.log("I will invest at least 6 hrs every single day for next 60 days");
}




/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/
for (let i = 61; i <= 100; i++) {
    // console.log(i);
    if (i % 2 !== 0) {
        console.log(i);
    }
}

for (let i = 78; i <= 98; i++) {
    // console.log(i);
    if (i % 2 === 0) {
        console.log(i);
    }
}




/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/
let sum = 0;
for (let i = 91; i <= 129; i++) {
    console.log(i);
    if (i % 2 !== 0) {
        sum = sum + i;
        console.log(sum);
    }
}
console.log("Sum of all the odd number:",sum);

let sum1 = 0;
for (let i = 51; i <= 85; i++) {
    console.log(i);
    if (i % 2 === 0) {
        sum1 = sum1 + i;
    }
}
console.log("Sum of all the even numbers:", sum1);




/***

Generate a multiplication table for number 9

 */


/*programming hero*/
for (let i = 1; i <= 10; i++) {
    console.log(i);
    multi = 9 * i;
    console.log(multi);
}




/***

Implement a countdown timer that counts down from 81 to 65.

 */


/*programming hero*/
for (let i = 81; i >= 65; i--) {
    console.log(i);
}