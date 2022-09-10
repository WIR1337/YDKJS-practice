/*
Параметры могут быть [] или {} , также могут быть nil or null or None or nothing
тогда возраващаю false
*/
/* 
1. Посчитать кол-во одинаковых чисел в арр1
2. Посчитать кол-во одинаковых чисел в арр2
3. Посмотреть квадраты чисел с 1объекта во 2ом объекте одинаково ли кол-во ?
    - если да , то работаем дальеш
    - нет ? false
*/
a = [0, 1, 3, 1, 10, 5, 8, 0, 6, 5, 10, 10, 4, 9, 1, 7, 9, 5, 2, 6, 1, 7, 5, 5]
b = [49, 4, 1, 25, 25, 100, 64, 0, 49, 0, 25, 25, 81, 1, 1, 36, 100, 9, 100, 1, 16, 82, 36, 25]
function comp(array1, array2) {
    let arr1 = array1
    let arr2 = array2
    let counter = 0

    if (!arr1 || !arr2) {
        return false
    } else if (arr1.length != arr2.length) {
        return false
    } else {
        arr1.forEach(e => {
            arr2.find((a) => {
                if (a == e * e) {
                    // console.log('соответсвует')
                    counter += 1
                    return true
                } else {
                    // console.log('не соответствует')
                }
            })
        });
        if (counter == arr1.length) return true
        else if (counter < arr1.length) return false
    }
}
let result = comp(a, b)
console.log(result)