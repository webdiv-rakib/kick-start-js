const products = [
    { name: 'Shampoo', price: 260, quantity: 2 },
    { name: 'Soap', price: 190, quantity: 2 },
    { name: 'Water Pot', price: 160, quantity: 1 },
    { name: 'Water Mug', price: 110, quantity: 1 },
    { name: 'Tawel', price: 360, quantity: 1 },
    { name: 'Majuni', price: 80, quantity: 2 }
];
function cartTotal(products) {
    // console.log(products);
    let total = 0;
    for (const product of products) {
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}
const total = cartTotal(products);
console.log('Total:', total);