// -----Validation check for number-----
function multiply(num1, num2) {
    // console.log(typeof num1);
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please provide a number'
    }
    // else if (typeof num2 !== 'number') {
    //     return 'Please provide a number';
    // }
    const multi = num1 * num2;
    return multi;
}
const result = multiply(5, 'seven');
// console.log(result);

// -----Valication check for String-----
function fullName(firstName, secondName) {
    // console.log(firstName, secondName);
    if (typeof firstName !== 'string' || typeof secondName !== 'string') {
        return 'Please insert string';
    }
    const fullName = firstName + ' ' + secondName;
    return fullName;
}
const first = 'Abu Nayim Mohammad';
const second = 'Rakib';
const name = fullName(first, second);
console.log(name);