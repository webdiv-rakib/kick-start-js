const products = [
    { name: 'Shampoo', price: 260 },
    { name: 'Soap', price: 190 },
    { name: 'Water Pot', price: 160 },
    { name: 'Water Mug', price: 110 },
    { name: 'Tawel', price: 360 },
    { name: 'Majuni', price: 80 }
];
const numbers = [300, 400, 700, 200, 500, 100];
function getShoppingTotal(products) {
    let total = 0;
    for (const product of products) {
        total = total + product.price;
    }
    return total;
}
const total = getShoppingTotal(products);
console.log('Total:', total);