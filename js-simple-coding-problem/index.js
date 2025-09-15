//covert Inch to Feet
function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
// const result = inchToFeet(160);
// console.log(result)

//Convert Feet to Inch
// ignore this solution
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + 'ft' + inchRemaining + 'inch.';
    return result;
}
const rakibHeight = inchToFeet2(68);
// console.log(rakibHeight);

// =================================
// Convert Miles to Kilometer
function milesToKilometer(miles) {
    const kilo = miles * 1.60934;
    return kilo;
}
const kilometer = milesToKilometer(5);
// console.log(kilometer);

// ================================
// convert kilometer to miles
function kilometerToMiles(kilometer) {
    console.log(kilometer);
    const mile = kilometer / 1.60934;
    return mile;
}
const mile = kilometerToMiles(14);
console.log(mile);