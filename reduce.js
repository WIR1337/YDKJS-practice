var arr = [1, 1, 1, 2, 3, 4]
let a = arr.reduce((acc, cur, i, arr) => {
    console.log(acc[cur])
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1
    return acc
},{})
console.log(a)

    // console.log(pr)
    // console.log(cur)
    // console.log(`Я индекс ${i}`)
    // console.log(`Я текущий обрабатываемый массив ${arr}`)
