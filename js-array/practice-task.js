/**
 * Declare an array
 * 1. Declare an array with 5 elements containing fruits
 * 2. console log the 3rd index element
 * 3. change the value of the 2nd index element to jambura
 * 4. console log the final array
 */
const fruits = ['Mango', 'Jack fruit', 'Apple', 'Grap', 'Licchi'];
// console.log(fruits);
// console.log(fruits[2]);
fruits[2] = ('Jambura');
// console.log(fruits);




/**
 * Add or remove elements
 * 1. Declare an array of 3 tourist destinations
 * 2. Add a new tourist destination to your tourist array
 * 3. Add two more to your array
 * 4. Remove the last tourist destination you have added
 * 5. display the final array as output
 */
const destination = ['Rajshahi', 'Sylhet', 'Chittagong'];
// console.log(destination);
destination.push('Khulna');
// console.log(destination);
destination.push('Cox bazar', 'Bandorban');
// console.log(destination);
destination.pop();
// console.log(destination);




/**
 *  Checking Array Membership with ‘includes’
 * 1. Create an array of books containing different book.
 * 2. Use the includes method to check if the array contains a javascript book.
 * 3. Print a message to the console indicating whether the element is present in the array or not.
 */
const books = ['Bangla', 'English', 'Math'];
if (books.includes('javascript')) {
    // console.log("It present");
}
else {
    // console.log('Its not present in array');
}




/**
 * Checking if it's an Array
 * 1. Create different variables, each containing either an array or a non-array value.
 * 2. Now use isArray to check if each variable is an array.
 * 3. Print a message to the console indicating whether each variable is an array or not.
 */
const names = ['abu', 'nayim', 'mohammad'];
const numbers = [1, 3, 5, 7, 9];
const num1 = 12;
const name1 = 'rakib';
if (Array.isArray(num1)) {
    // console.log('This one is array');
}
else {
    // console.log('This one is not an array');
}




/**
 * Combining Arrays
 * 1. Create two arrays of your choice.
 * 2. Use the concat method to combine the two arrays into a new array.
 * 3. Print both the original arrays and the combined array using console.log().
 */
const array1 = ['Rakib', 'Raju', 'Toymur'];
const array2 = [27, 29, 31];
const bothArray = array1.concat(array2);
console.log(array1, array2);
console.log(bothArray);

