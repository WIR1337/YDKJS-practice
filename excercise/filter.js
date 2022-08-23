
// function inBetween(a, b) {
//     return (e) => e >= a && e <= b
// }

// function inArray(inputArr) {
//     return (e) => e == inputArr.find(o => o == e)
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// // console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

// console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
function byField(arg) {
    return (a, b) => a.arg > b.arg ? 1 : -1
}
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];



  let sorted = users.sort(byField('name'));
  let ages = users.sort(byField('age'));
  console.log(ages)