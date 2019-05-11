// default parameter
// let add = (a, b=0) => a+b
// console.log(add(5))

// Rest Operator Example 1
// function sum(...num) {// convert value to array
//     console.log(num)
// }
//
// sum(10, 20)

// Rest Operator Example 2
// function sum(...num) {
//     return num.reduce((a, b)=>a+b);
// }
//
// console.log(sum(10, 20, 50))

// Spread Operator Example 1
// let arr = [1, 2, 3, 4];
// console.log(...arr) // convert array to value

// Spread Operator Example 2
// let arr = [1, 2, 3, 4];
// arr = [...arr, 5, 6, 7]
// console.log(...arr) // convert array to value

// Spread Operator Example 3
let obj1 = {
    name: 'Ahosan Habib',
    email: 'mdahosanhabib@outlook.com'
}

let obj2 = {
    ...obj1
};

console.log(obj2) // convert array to value