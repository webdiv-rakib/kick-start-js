const friends = ['toymur', 'raju', 'sabbir'];
// console.log(friends);
friends.shift();
// console.log(friends);
friends.unshift('sabbir');
// console.log(friends);

// --------Practice-------------
const subjects = ['Bangla', 'Math', 'English'];
console.log(subjects);
subjects.push('Physics');
subjects.push('Biology', 'Chemistry');
console.log(subjects);
const sub1 = subjects.pop();
console.log(subjects,sub1);