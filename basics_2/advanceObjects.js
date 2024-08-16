//*************** Advance Objects****************** */
//object singleton (by using the constructor)

const tinderUser = new Object();

tinderUser.id = "22BCS10284";
tinderUser.name = "Pradeep Sahu";
tinderUser.age = 21;
tinderUser.obj = {};
tinderUser.obj.name = "another name";
tinderUser.obj.age = 100;

// console.log(tinderUser);

const anotherUser = new Object();

anotherUser.name = "Pradeep sahu";
anotherUser.age = 21;
anotherUser.section = "A";

const regularUser = {
  email: "official.pradeepsahu@gmail.com",
  fullName: {
    userFullName: {
      userName: "Pradeep",
      surname: "Sahu",
    },
    age: {
      myage: "none",
      myfamilyAge: {
        sister: 21,
        brother: 16,
      },
    },
  },
};
// console.log(regularUser.fullName.age.myfamilyAge);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};

// ************************ most used...

// const obj3 = {
//   ...obj1,
//   ...obj2,
// };

// console.log(obj3);

//*********** least used */
//{} target, obj1, obj2 = source

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "official.pradeepsahu@gmail.com",
  },
  {
    id: 2,
    email: "official.@gmail.com",
  },
  {
    id: 3,
    email: "official.sahu@gmail.com",
  },
  {
    id: 4,
    email: "official.official@gmail.com",
  },
];

// console.log(users[1].id);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //rarely used

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); checks if the object has the following property/key
