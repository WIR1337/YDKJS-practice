/*
Параметры могут быть [] или {} , также могут быть nil or null or None or nothing
тогда возраващаю false
*/
a = [10, 10, 8, 1, 3, 2, 0, 3, 9, 6, 7, 5, 9, 9, 2, 1, 6, 4, 3, 0, 8, 8]
b = [81, 9, 100, 64, 100, 81, 9, 36, 25, 49, 1, 64, 1, 0, 36, 16, 4, 1, 64, 4, 9, 81]
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