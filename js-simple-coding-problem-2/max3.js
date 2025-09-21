const jim = 56;
const tim = 89;
const kim = 69;

if (jim > tim && jim > kim) {
    // console.log('Jim is the ultimate boss');
}
else if (tim > jim && tim > kim) {
    // console.log('Tim is the boss');
}
else {
    // console.log('Kim is the kardashians boss');
}

// ------------Using Function----------------
const rakib = 150;
const toymur = 100;
const raju = 70;
const max = maxOfThree(rakib, toymur, raju);
function maxOfThree(rakib, toymur, raju) {
    if (rakib > toymur && rakib > raju) {
        console.log('Rakib is the boss');
    }
    else if (toymur > rakib && toymur > raju) {
        console.log('Toymur is the boss');
    }
    else {
        console.log('Raju is the boss');
    }
}