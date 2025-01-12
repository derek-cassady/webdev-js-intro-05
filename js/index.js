// Prevent us from attempting to use variables
// that are not declared
"use strict"

// const numbers = [1, 2, 3, 4, 5];
// const colors = ["red", "blue", "green"];
// console.log("Numbers Array:", numbers);
// console.log("Colors Array:", colors);

// const mixedArray = [42, "hello", true, null, { name: "John" }, [1, 2, 3]];
// console.log("Mixed Array:", mixedArray);

// const numbers = [1, 2, 3, 4, 5];
// console.log("Type of numbers array:", typeof numbers);

const numbers = [1, 2, 3, 4, 5];
const colors = ["red", "blue", "green"];
numbers.pop();
colors.shift();
console.log("After removal, Numbers Array:", numbers);
console.log("After removal, Colors Array:", colors);