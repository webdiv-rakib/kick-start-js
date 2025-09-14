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
    const result = feetNumber + 'ft' + inchRemaining+'inch.';
    return result;
}
const rakibHeight = inchToFeet2(68);
// console.log(rakibHeight);

// =================================
// Convert Miles to Kilometer
function milesToKilometer(miles){
    console.log(miles);
}
milesToKilometer(5);
// going to update my laptop to win11