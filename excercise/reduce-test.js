let arr = [5, 4, 3, 2, 1, 6, 8, 9]
let result;

result = arr.reduce((acc, cur) => {
    if (acc + cur > 10) {
        return cur
    } else if (acc + cur < 10) {
        return acc + cur
    }
},0)
console.log(result)