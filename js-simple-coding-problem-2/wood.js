// -------Wood Calculator-------------
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;
    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}
const totalFurniture = woodCalculator(0, 0, 2);
// console.log('Total Wood Needed:', totalFurniture);

// -------Shopping Calculator------------
function shoppingCalculator(shirtQuantity, pantQuantity, shoeQuantity) {
    console.log(shirtQuantity, pantQuantity, shoeQuantity);
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;

    const totalShirtPrice = shirtPrice * shirtQuantity;
    const totalPantPrice = pantPrice * pantQuantity;
    const totalShoePrice = shoePrice * shoeQuantity;

    const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
    return totalPrice;
}
const cloth = shoppingCalculator(2, 2, 2);
console.log('Grand Total:', cloth);
