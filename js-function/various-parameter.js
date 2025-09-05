/**
 * for a given string tell me whether it has even number of character
 */
// ========String Example=========
function evenSizedString(str) {
    const size = str.length;
    if (size % 2 === 0) {
        console.log('Even size');
        return true;
    }
    else {
        console.log('Odd size');
        return false;
    }
}
const countryName = 'Bangladesh';
// evenSizedString(countryName);
const name = "RakibulHassan";
// evenSizedString(name);

// ---------------------------------
// ==========Boolean Example==========
function doubleTriple(number, doDouble) {
    if (doDouble === true) {
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3
        return result;
    }
}
// console.log(doubleTriple(5, false));

// ==========Array Example==========
function numberOfElements(numbers) {
    const len = numbers.length;
    return len;
}
console.log(numberOfElements([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// ==========Object Example==========
function getAge(person) {
    const age = person.age;
    return age;
}