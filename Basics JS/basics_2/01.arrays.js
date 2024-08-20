// Arrays are the linear data structure which stores the data in the sequential manner
// share same reference (all methods, or changes made to the array will reflect on all arrays)
// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];

// console.log(arr);
// console.log(typeof arr);
// console.log(arr2);
// console.log(typeof arr2);
// console.log(arr[0]);
// arr[0] = 11;
// console.log(arr);

// const newArray = new Array(1, 2, 4);
// console.log(newArray);

// newArray.push(9);
// newArray.push(3);

// newArray.unshift(8);

// newArray.shift();
// newArray.shift();

// console.log(newArray);

// console.log(newArray.includes(9));
// console.log(newArray.indexOf(2));

// const extraArr = newArray.join();

// console.log(newArray);
// console.log(extraArr); //converted to string

//slice, splice

// const newArray = new Array(1, 2, 4, 1, 5, 9, 10);
// console.log("A ", newArray);
// const extra = newArray.slice(1, 3); //doesn't include the last element and doesn't make changes in the array.

// console.log(extra);

// console.log("B ", newArray);
// console.log(extra);

// console.log("C ", newArray);

// const spliceArray = newArray.splice(1, 3); //includes the 3th element as well and make changes in original array
// console.log(spliceArray);
// console.log("D ", newArray);
