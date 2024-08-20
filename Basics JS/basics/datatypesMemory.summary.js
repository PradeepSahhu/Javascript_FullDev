// Primitive

//7 types : String (call by value) [data copied]

//1. String
//2. Number
//3. Boolean
//4. null
//5. undefined
//6. Symbol(make something unique)
//7. BigInt

// Dynamic language

// const score = 100;
// const scoreValue = 100.3;

// const isLoggedIn = false;

// const temperature = null;

// let userEmail; //undefined
// let userEmail_undefined = undefined; //undefined

// const id = Symbol("123");
// const another_id = Symbol("123");

// console.log(id === another_id);

// const bigNumber = 12341234324n;

// //Non primitive (refrence type)

// //Array , Objects, Functions

// const heroes = ["shaktiman", "naagraj", "doga"];

// const myObj = {
//   name: "pradeep",
//   age: 21,
// };

// const myFunc = function () {
//   console.log("hello india");
// };
// // myFunc();

// // console.log(typeof myFunc);

// console.log(typeof bigNumber);

// memory stack & heap

//primitive data types (Stack) and non- primitive dataypes(Heap)

//Primitive datatype

const names = "Pradeep sahu";

let anotherName = names;

anotherName = "Ritik sahu";

console.log(names);

console.log(anotherName);

// Non-Primitive types

const dataObj = {
  name: "Pradeep",
  uid: "22BCS10284",
};

const anotherObj = dataObj;

anotherObj.name = "Ritik";
console.log(dataObj);
console.log(anotherObj);
