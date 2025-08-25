/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/
for (let i = 1; i <= 200; i++) {
    console.log(i);
    if (i >= 100) {
        break;
    }
}




/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let i = 1;
while (i <= 200) {
    console.log(i);
    if (i >= 100) {
        break;
    }
    i++;
}




/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
for (let i = 2; i <= 100; i++) {
    if (i * i <= 100) {
        console.log("First square number is:", i);
        break;
    }
}
