// 1. Write a function to convert temperature from Celsius to Fahrenheit.
function tempConversion(temp) {
    const result = temp * 9 / 5 + 32;
    return result;
}
const fahrenheit = tempConversion(38);
// console.log('Temperature is fahrenheit:', fahrenheit);




// 2. You are given an array of numbers. Count how many times the a number is repeated in the array.

// ===This one not working========
// function numberOfElements(numbers) {
//     const duplicate = [];
//     for (const num of numbers) {
//         if (duplicate.includes(num) !== false) {
//             duplicate.push(num);
//         }
//     }
//     const dupliLen = duplicate.length;
//     console.log(duplicate);
//     return dupliLen;

// }
// const numbers = numberOfElements([5, 6, 11, 12, 98, 5]);
// console.log('Duplicate number count:', numbers);

function numberOfElements(numbers, find) {
    let count = 0;
    for (const num of numbers) {
        if (num === find) {
            count++;
        }
    }
    return count;
}
const find = 5;
const numbers = [5, 6, 11, 12, 98, 5, 5];
// console.log('Output:', numberOfElements(numbers, find));

// ------Another problem---------
function notExit(array, search) {
    // console.log(array);
    // console.log(search);
    const howManyTimes = 0;
    for (const newArray of array) {
        if (newArray === search) {
            howManyTimes++;
        }
    }
    return howManyTimes;
}
const search = 25;
const array = [5, 6, 11, 12, 15, 98, 5];
const outPut = notExit(array, search);
// console.log("Output:", outPut);





// 3. Write a function to count the number of vowels in a string.
function countVowels(string) {
    // console.log(string);
    // console.log(vowels);
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (const str of string) {
        for (const vowel of vowels) {
            if (str === vowel) {
                count++;
            }
        }
    }
    return count;

}
const string = 'abu nayim mohammad rakib';
const sentence = countVowels(string);
// console.log("Total number of vowels:", sentence);




// 4. Write a function to find the longest word in a given string.
function longestWord(sentence1) {
    // console.log(sentence1);
    const words = sentence1.split(" ");
    // console.log(words);
    let longest = "";
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
const sentence1 = 'A passionate web developer from Bangladesh';
const find1 = longestWord(sentence1);
// console.log('Longest word in sentence is:', find1);




// 5. Generate a random number between 10 to 20.
const randomNumber = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
console.log(randomNumber);
