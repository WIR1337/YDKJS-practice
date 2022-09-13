/* 
Find max equal value to <=10 but not more
*/

let arr = [5, 4, 3, 2, 1, 6, 8, 9]
let result = 0;

for (let i = 0; i < arr.length; i++) {
    let elOfArr = arr[i]

    if (result + elOfArr <= 10) {
        result += elOfArr
    } else if (result + elOfArr > 10) {
    }
}

console.log(result)