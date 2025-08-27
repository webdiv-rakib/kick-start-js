const sentence = 'I am learning web dev';

// reverse using for of
let reverse = '';
for (const letter of sentence) {
    // console.log(letter);
    reverse = letter + reverse;
}
// console.log(reverse);

// reverse using for {ignore this solution now}
let rev = '';
for (let i = 0; i <= sentence.length; i++) {
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev;
}
// console.log(rev);

// shortcut way
const reversed = sentence.split('').reverse().join('');
console.log(reversed);
