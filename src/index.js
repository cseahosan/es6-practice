//problem: its giving output window object

// const obj = {
//     name: 'Ahosan Habib',
//     print: function () {
//         setTimeout(function () {
//             console.log(this)
//         },1000)
//     }
// }
//
// obj.print();

//solution 1
// const obj = {
//     name: 'Ahosan Habib',
//     print: function () {
//         setTimeout(function () {
//             console.log(this)
//         }.bind(this), 1000)
//     }
// }
//
// obj.print();

// solution 2 (using arrow function)
const obj = {
    name: 'Ahosan Habib',
    print: function () {
        setTimeout(()=>{
            console.log(this)
        },1000)
    }
}

obj.print();