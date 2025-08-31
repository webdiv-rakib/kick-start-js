const computer = {
    brand: 'lenovo',
    price: 45000,
    processor: 'interl',
    ssd: '1TB',
    monitor: 'Gigabyte'
}

// const keys = Object.keys(computer);
// console.log(keys);

const myComputer = {
    motherBoard: 'Gigabyte B660M',
    processor: 'Inter Core i5',
    ram: "2x 8GB GDDR4",
    cooler: 'Cooler Master',
    casing: 'Joggos',
    ssd: 'Trancend 128GB',
    ssd1: 'Kingstone 256GB',
    ssd2: 'Hp ex 900 512GB',
    monitor: 'Gigabyte G24F 24inch',
    mouse: 'Monka m1 Pro',
    keyboard: 'A4tech',
}

console.log(myComputer);
// dot notation;
console.log(myComputer.motherBoard);
// bracket notation;
console.log(myComputer['monitor']);
// all property at once;
const information = Object.keys(myComputer);
console.log(information);