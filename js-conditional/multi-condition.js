const salary = 25000;
const isBCS = true;
const height = 68;
const hasCar = false;

// -----------Use of AND && condition-------------
if (salary > 20000 && height > 66) {
    console.log("Shuuuuuuuuu patro");
}
else {
    console.log("Onno patro khujo");
}


// ----------Use of OR || condition---------------
if (salary >= 5000 || height > 50 || isBCS == true) {
    console.log("Esho baba kobul");
}
else {
    console.log("Vag tui mogbul");
}

// ----------Use of Complex condition-------------
if ((salary > 25000 && hasCar == true) || isBCS == true) {
    console.log("14gushti raji");
}
if ((salary > 30000 || hasCar == true) && isBCS == true) {
    console.log("14gushti raji");
}
else {
    console.log("Baba ashte paro");
}