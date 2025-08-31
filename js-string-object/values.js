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
// get property using keys;
const information = Object.keys(myComputer);
console.log(information);
// get values using values;
const information1 = Object.values(myComputer);
console.log(information1);