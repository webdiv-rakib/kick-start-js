const disha = 56;
const ankit = 45;
if (disha > ankit) {
    console.log("Disha has more marks");
}
else {
    console.log("Ankit has more marks");
}

// inside a function
function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
console.log(getMax(30, 20));