// nested object and get elements value set
const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

console.log(college.unique.result.gpa);
console.log(college.events[0]);
college.events[0] = 'Boishakhi mela';
console.log(college.events);

// to delete property and value of an object
delete college.class;
console.log(college);