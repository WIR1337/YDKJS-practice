var arr = [1, 2, 3]
// for of доступен если есть @@iterator
// for(let i of arr){
//     console.log(i); // 1 2 3
// }

let it = arr[Symbol.iterator]()

console.log(
    it.next(),
    it.next(),
    it.next(),
    it.next()
)

