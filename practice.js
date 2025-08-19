// Problem - 1
/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
let price = 500;
if (price <= 500) {
    // console.log("You got free coke");
}
else {
    // console.log("You have to pay 30Taka for coke");
}





// -----------------------------------
// Problem - 2
/***

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
let weight = 60;
let height = 1.75;
const bmi = weight / (height * height);
// console.log("Your BMI is:", bmi.toFixed(2));
if (bmi < 18.5) {
    // console.log("You are underweight");
}
else {
    if (bmi >= 18.5 && bmi <= 24.5) {
        // console.log("You are normal");
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        // console.log("You are overweight");
    }
    else {
        // console.log("You are obese");
    }
}





// -------------------------------------
// Problem - 3
/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let mark = 69;
if (mark >= 90 && mark <= 100) {
    console.log("Grade: A");
}
else if (mark >= 80 && mark <= 89) {
    console.log("Grade: B");
}
else if (mark >= 70 && mark <= 79) {
    console.log("Grade: C");
}
else if (mark >= 60 && mark <= 69) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}

// Problem - 4
/***

if you get more then 80 then inside your friend score.
    If your friend get more than 80. then go for a lunch.
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time.
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note:
use nested if-else-if-else
*/


// Problem - 5
/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result.
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else.

also, write it using ternary operator.

 */




// Problem - 6
/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/