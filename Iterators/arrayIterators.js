//ForEach

// It doesn't return anyvalue

// const arr = ["Pradeep", "Sumit", "Ritik", "Roshan", "Sandeep"];

// const arrayList = arr.forEach((item, index, fullArr) => {
//   //   console.log(`${index} --> ${item} --> ${fullArr}`);
//   return item;
// });

// //! automatically return when using ()
// const arrayList = arr.forEach(
//   (item, index, fullArr) =>
//     //   console.log(`${index} --> ${item} --> ${fullArr}`);
//     item
// );

// console.log(arrayList);

//Filter
// it returns a value

// const newArray = arr.filter((item) => item.length > 5);
// console.log(newArray);

//! if using {} then we need to return the value. (it means starting a scope) Here we need to explicitely initiate a scope
// const newArray = arr.filter((item) => {
//   return item.length > 5;
// });
// console.log(newArray);

//? above can be done using forEach by

// const arr = ["Pradeep", "Sumit", "Ritik", "Roshan", "Sandeep"];

// const newNums = [];

// arr.forEach((item) => {
//   if (item.length > 5) {
//     newNums.push(item);
//   }
// });
// console.log(newNums);

// const arr = ["Pradeep", "Sumit", "Ritik", "Roshan", "Sandeep"];

//Reduce

// reduce will use to add the nubmer (accumulator,item)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const summationNumber = arr.reduce(
  (accumulator, num) => (accumulator += num),
  0 //initial vlaue of accumulator
);

console.log(summationNumber);

// const arr = ["Pradeep", "Sumit", "Ritik", "Roshan", "Sandeep"];
// const num = [1, 2, 3, 4, 5];

//! map also returns a new array after doing some modification
//map

// const newadded = num.map((item) => item +2);
// const newadded = num.map((item) => {
//   return item + 2;
// });
//TODO: Both are same
// console.log(newadded);

//!Chaining

//chaining in arrs looping

// const num = [1, 2, 3, 4, 5];

// const newArray = num
//   .filter((n) => n % 2)
//   .map((n) => n + 2)
//   .map((item) => item * 2);

// console.log(newArray);
