// //objects in js

//object literal
// const mySymbol = Symbol("Mykey");

// const userObj = {
//   name: "Pradeep Sahu",
//   section: "22BCS_DC-701",
//   Group: "A",
//   "Friend Name": ["Soyam", "Surbhi", "Kumar Devashish"],
//   age: 21,
//   //symbol as key
//   mySymbol: "not so unique",
//   [mySymbol]: "unique",
// };

// console.log(userObj.name);
// console.log(userObj["name"]);
// console.log(userObj["age"]);
// console.log(userObj["Friend Name"]);
// console.log(userObj[mySymbol]); //whenever using symbol as key inject it inside [] brackets and while displaying value also inject it in the same brackets
// console.log(userObj["mySymbol"]);

// // Changing the value of any key
// userObj.name = "Ritik Sahu";

// console.log(userObj);

// // freezing the object such that it can't be changed later
// // Object.freeze(userObj);

// userObj.Group = "B";

// console.log(userObj);

// // function are treated as type 1 citizen like functions are not discremenated, we can treat them just like variables.

// userObj.greeting = function () {
//   console.log("Hello JS user");
// };

// userObj.greeting2 = function () {
//   console.log(`Hello js User ${this.name}`);
// };
// // console.log(userObj);
// // console.log(userObj.greeting); // functions reference has been returned
// console.log(userObj.greeting()); // function has been called with undefined

// console.log(userObj.greeting2());

//*************** Advance Objects****************** */
