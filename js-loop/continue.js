// continue --> skip this iteration
// break --> i am done with this loop, loop end

// Continue using for loop
for (let i = 1; i < 10; i++) {
    if (i % 2 === 1) {
        continue;
    }
    // console.log(i);
}

// Continue using while loop
let n = 0;
while (n < 10) {
    n++;
    if (n % 5 !== 0) {
        continue;
    }
    console.log(n);
}