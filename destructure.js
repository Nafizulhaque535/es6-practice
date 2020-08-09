const person = {name: 'Usain Bolt', age: 27, job: 'athlete', gName: 'Ema Watson', address: 'california', phone: '02135566', friends: ['Tom Hanks', 'Kross', 'Nathan']}

const { phone } = person;

const complexObject = {
    name: 'abc,
    info: {
        address: 'usa',
        leader: 'trumph'
    }
}

const {leader} = complexObject.info;
// const gName = person.gName;
// const phone = person.phone;

// console.log(gName, phone, address);
// console.log(gName, phone, address);

const friends = ['Salman Khan', 'Amir Khan', 'SRK', 'Ali Khan']
const [smallFriend, nextFriend, ...restFriends] = friends;
console.log(restFriends);