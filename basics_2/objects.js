//objects in js

const mySymbol = Symbol("Mykey");

const userObj = {
  name: "Pradeep Sahu",
  section: "22BCS_DC-701",
  Group: "A",
  "Friend Name": ["Soyam", "Surbhi", "Kumar Devashish"],
  age: 21,
  //symbol as key
  [mySymbol]: "unique",
};

console.log(userObj.name);
console.log(userObj["name"]);
console.log(userObj["age"]);
console.log(userObj["Friend Name"]);
console.log(userObj[mySymbol]); //whenever using symbol as key inject it inside [] brackets and while displaying value also inject it in the same brackets
