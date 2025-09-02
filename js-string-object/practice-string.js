//Count how many times a string has the letter a
let text = "Abu Nayim Mohammad Rakib"
let count = 0;
// console.log(text.toLowerCase());
for (let i = 0; i < text.length; i++) {
    if (text[i].toLowerCase() === "a") {
        count++;
    }
}
// console.log('Total "a" count: ', count);

// same another
let school = 'Bindubasini Government Boys Hight School Tangail';
let sum = 0;
for (let i = 0; i < school.length; i++) {
    if (school[i].toLowerCase() === "b") {
        sum++;
    }
}
// console.log("Total 'b' count: ", sum);





//Count how many times a string has the letter a or A 
let a = "JavaScript Is an Amazing Language";
let count1 = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] === "a" || a[i] === "A") {
        count1++;
    }
}
// console.log("Total Count of A or a: ", count1);

// another problem but same
let nakib = "Nakib Al Fattah";
let count2 = 0;
for (let i = 0; i < nakib.length; i++) {
    if (nakib[i] === "N" || nakib[i] === "n") {
        count2++;
    }
}
console.log("Total count of N and n: ", count2);




// Check whether a string contains all the vowels a, e, i, o, u;

let varsity = "Daffodil International University";
if (varsity.includes("a") &&
    varsity.includes("e") &&
    varsity.includes("i") &&
    varsity.includes('o') &&
    varsity.includes('u')
) {
    // console.log("The string contains all vowels");
}
else {
    // console.log("The string does not contain all the vowel");
}




// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
let task4 = 'You should be able to check whether x or X exists. After that, search online how to replace a character in a string.';
let result = task4.replaceAll("x", "y").replaceAll("X", "Y");
console.log(result);