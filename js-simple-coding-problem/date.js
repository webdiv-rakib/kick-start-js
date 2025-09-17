const today = new Date();
const date = new Date('2062-10-09');
console.log(date.getMonth());
console.log(date.getDay());
const specificDate = new Date(2024, 8, 17);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate);
console.log(specificDate.toLocaleDateString('eng-GB'));

