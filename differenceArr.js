var a = [0, 1, 3, 1, 10, 5, 8, 0, 6, 5, 10, 10, 4, 9, 1, 7, 9, 5, 2, 6, 1, 7, 5, 5]
var b = [49, 4, 1, 25, 25, 100, 64, 0, 49, 0, 25, 25, 81, 1, 1, 36, 100, 9, 100, 1, 16, 82, 36, 25]


let obj1 = a.reduce((acc, cur, i, arr) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1
    return acc
}, {})
console.log(obj1)
let obj2 = b.reduce((acc, cur, i, arr) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1
    return acc
}, {})
console.log(obj2)


let uniqueArray = a.filter(function (item, pos) {
    return a.indexOf(item) == pos;
}).sort((a,b) => a - b)
console.log(uniqueArray)
console.log(`Uniq length ${uniqueArray.length}`)
for (let i = 0; i < uniqueArray.length; ++i) {
    let param = obj1[uniqueArray[i]] == obj2[uniqueArray[i] * uniqueArray[i]] ? 1 : 0
    console.log(param)
}


