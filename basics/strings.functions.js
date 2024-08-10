// modern syntax of js strings

let name = "Pradeep sahu";
let age = 21;

// console.log(`Hello my name is ${name} and age is ${age}`); // string interpolations

// using strings buildin methods.

// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.charAt(9)); // returns the character at given index.
// console.log(name.indexOf("r")); // returns the index of the given character.

let newName = new String("Pradeep"); // another way to declare strings - string is an object not an array
// console.log(newName.length);

// console.log(newName.__proto__);

// const newString = newName.substring(0, 4);

// console.log(newString);

// const anotherString = newName.slice(-3, 3);

// console.log("The out put is ", anotherString);

// const newTrim = "   Pradeep  ";

// console.log(newTrim);

// console.log(newTrim.trim());

// const url = "https://pradepesahu.in/pradeep%20choudary";

// console.log(url.replace("%", ""));

// console.log(url.includes("Pradeep"));

const converttoArray =
  "this is the sentence - which i used - and initiated the value";

console.log(converttoArray.split("-"));
