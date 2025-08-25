/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/
let num = 1;
while (num <= 60) {
    // console.log("I will invest at least 6 hrs every single day for next 60 days! ", num);
    num++;
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
let num1 = 61;
while (num1 <= 100) {
    // console.log(num1);
    if (num1 % 2 !== 0) {
        // console.log("Odd Numbers:", num1);
    }
    num1 += 1;
}

let num2 = 78;
while (num2 <= 98) {
    if (num2 % 2 === 0) {
        // console.log("Even Numbers:", num2);
    }
    num2++;
}




/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/
let num3 = 81;
let sum = 0;
while (num3 <= 131) {
    // console.log(num3);
    if (num3 % 2 !== 0) {
        sum = sum + num3;
        // console.log("Total:", sum);
    }
    num3++;
}
// console.log("Final total:", sum2);

let num4 = 206;
let sum2 = 0;
while (num4 <= 311) {
    // console.log(num4);
    if (num4 % 2 === 0) {
        sum2 = sum2 + num4;
        // console.log("Even Numbers Sum:", sum2);
    }
    num4++;
}
// console.log("Total sum of Even Numbers:", sum2);




/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */


/*programming hero*/
let i = 1;
while (i <= 10) {
    multi = 5 * i;
    // console.log(multi);
    i++;
}




/***

Implement a countdown timer that counts down from 21 to 15.

 */


/*programming hero*/
let timer = 21;
while (timer >= 15) {
    console.log(timer);
    timer--;
}