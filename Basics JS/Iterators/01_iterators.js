//! for loop

const array = [1, 2, 4];

// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     console.log(`${i} is best Number`);
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`Outer Loop : ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     // console.log(`Inner Loop : ${j} and Outer Loop ${i}`);
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

//! working with array.

// const myArray = ["batman", "superman", "flash"];

// for (let i = 0; i <= myArray.length; i++) {
//   const element = myArray[i];
//   console.log(element);
// }

//!break and continue

// for (let i = 0; i <= 20; i++) {
//   if (i == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`${i}`);
// }
// for (let i = 0; i <= 20; i++) {
//   if (i == 5) {
//     console.log(`Detected 5`);
//     continue;
//   }
//   console.log(`${i}`);
// }
//! while loop
// let index = 0;

// while (index <= 20) {
//   console.log(`The value of index is : ${index}`);
//   index += 2;
// }

//! Do while loop

let score = 11;
do {
  console.log(`The value of score is : ${score}`);
  score += 1;
} while (score <= 10);
