// destructuring

const user = {
  id: 345,
  name: {
    firstName: "Mezbaul",
    middleName: "Abedin",
    lastName: "Persian",
  },
  contactNo: "0170000000",
  address: "Uganda",
};

const {
  contactNo,
  name: { middleName : string },
} = user;


// array destructuring

const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'monica']

const [, , bestFriend, ...rest] = myFriends;

console.log(myFriends)

