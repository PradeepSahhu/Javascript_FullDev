//Dates in Js

// const date = new Date();

// console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);

// console.log(date.toDateString());
// console.log(date.toString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toISOString());
// console.log(date.toLocaleString());

// console.log(typeof date);

// const logDate = new Date(2023, 0, 2);
// const logDate = new Date("2025-01-26");
// const logDate = new Date("01-14-2024"); //MM-DD-YYYY
// console.log(logDate.toDateString());

// const createdTime = new Date("01-12-2025");

// const mytimeStamp = Date.now();

// // console.log(mytimeStamp);
// // console.log(createdTime.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  })
);
