// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
// enum Size {Small, Medium, Large} // Default value of the first element of the enum is 0, if we want another value we need to explicitly assigned it
// enum Size {Small="s", Medium="m", Large="l"}
// enum Size {Small = 1, Medium, Large} // The other value are increased from the first value
// let mySize: Size = Size.Medium
// console.log(mySize);
const enum Size {Small = 1, Medium, Large} // using a const with enum generate a more optimized code
let mySize: Size = Size.Medium
console.log(mySize);

