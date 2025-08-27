const address = 'andorkilla';
const part = address.slice(5, 9);
console.log(part);

const sentence = 'I am a good and hardworking person';
// console.log(sentence.split(' '));
// console.log(sentence.split('a'));
const friendsStr = 'Rahim,Kahim,Dahim,Lahim,Fahim,Sahim';
const friend = friendsStr.split(',');
console.log(friend);

const realFriends = ['Rahim', 'Kahim', 'Dahim', 'Lahim', 'Fahim', 'Sahim'];
console.log(realFriends.join());
console.log(realFriends.join('+'));