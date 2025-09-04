function doubleIt(num) {
    const double = num * 2;
    console.log(num, double);
}
console.log('I will call the function');
doubleIt(2);
console.log('---------------');
doubleIt(8);
console.log('---------------');
doubleIt(11);
console.log('---------------');
const number = 22;
doubleIt(number);
console.log('=====Difference=====');
// ---------------------------------
function difference(num1,num2) {
    const diff = num1 - num2;
    console.log(num1, num2,'difference is:', diff);
}
const fatherAge = 64;
const myAge = 27;
difference(fatherAge, myAge);

