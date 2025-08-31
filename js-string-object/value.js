const myInformation = {
    name: 'Abu Nayim Mohammad Rakib',
    age: 27,
    profession: 'Student',
    address: 'Tangail',
    salary: 0,
    married: false,
}
myInformation.age = 31;
myInformation['salary'] = 15000;
console.log(myInformation);
console.log(myInformation.age);
console.log(myInformation['salary']);
const location = 'address';
console.log(myInformation[location]);

const myName = 'name';
myInformation[myName] = 'Rakibul Hassan';
console.log(myInformation[myName]);