/**
 * array has some duplicate elements
 */
// =========For string array===========
function noDuplicate(duplicates) {
    const newArray = [];
    for (const item of duplicates) {
        if (newArray.includes(item) === false) {
            newArray.push(item);
        }
    }
    return newArray;
}
const biriyaniKhor = ['rakib', 'nur', 'toymur', 'raju', 'sabbir', 'kholil', 'rakib', 'nur'];
const noDupli = noDuplicate(biriyaniKhor);
// console.log(noDupli);

// =============For Number Array=============
const numbers = [1, 2, 3, 4, 5, 6, 1, 2, 3, 7, 8, 9, 4, 5, 6, 10];
const noDupliNumbers = noDuplicateNumbers(numbers);
console.log(noDupliNumbers);

function noDuplicateNumbers(array) {
    const unique = [];
    for (const elements of numbers) {
        if (unique.includes(elements) === false) {
            unique.push(elements);
        }
    }
    return unique;
}