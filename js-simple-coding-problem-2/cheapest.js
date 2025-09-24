const mobiles = [
    { name: 'Samsung', price: 125000, camera: '200mp', color: 'Black' },
    { name: 'Xiaomi', price: 110000, camera: '50mp', color: 'Silver' },
    { name: 'Oppo', price: 75000, camera: '68mp', color: 'Orange' },
    { name: 'Vivo', price: 35000, camera: '48mp', color: 'White' },
    { name: 'Iphone', price: 250000, camera: '50mp', color: 'Pure Orange' },
    { name: 'Walton', price: 25000, camera: '32mp', color: 'Black' }
];
function getCheapestPhone(phones) {
    console.log(phones);
    let min = phones[0];
    for (const phone of phones) {
        console.log(phone);
        if (phone.price < min.price) {
            min = phone;
        }
    }
    return min;
}
const cheap = getCheapestPhone(mobiles);
console.log('Cheapest Phone is:', cheap);

// ===========================================================
function getExpensivePhone(phones) {
    console.log(phones);
    let max = phones[0];
    for (const phone of phones) {
        console.log(phone);
        if (phone.price > max.price) {
            max = phone;
        }
    }
    return max;
}
const expensive = getExpensivePhone(mobiles);
console.log('Expensive Phone is:', expensive);

