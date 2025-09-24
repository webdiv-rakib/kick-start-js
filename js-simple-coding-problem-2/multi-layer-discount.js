/**
 * first 100 ---> 100
 * 101 to 200 ---> 90
 * above 200 ---> 70
 */
function layeredDiscountedTotal(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;
    if (quantity <= 100) {
        const total = quantity * first100Price;
        return total;
    }
    else if (quantity <= 200) {
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTOtal = remainingQuantity * second100Price;
        const total = first100Total + remainingTOtal;
        return total;
    }
    else {
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTOtal = remainingQuantity * above200Price;
        const total = remainingTOtal + first100Total + second100Total;
        return total;
    }
}
const discount = layeredDiscountedTotal(110);
console.log("Total Discount:", discount);