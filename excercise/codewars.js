var a = [0, 1, 3, 1, 10, 5, 8, 0, 6, 5, 10, 10, 4, 9, 1, 7, 9, 5, 2, 6, 1, 7, 5, 5]
var b = [49, 4, 1, 25, 25, 100, 64, 0, 49, 0, 25, 25, 81, 1, 1, 36, 100, 9, 100, 1, 16, 82, 36, 25]

function comp(a, b) {
    let arr1 = a
    let arr2 = b


    var count = 0;

    if (!arr1 || !arr2) {
        return false
    } else if (arr1.length != arr2.length) {
        return false
    } else {
        let objFromArr1 = arr1.reduce((acc, cur) => {
            acc[cur] = acc[cur] ? acc[cur] + 1 : 1
            return acc
        }, {})
        console.log(objFromArr1)
        let objFromArr2 = arr2.reduce((acc, cur) => {
            acc[cur] = acc[cur] ? acc[cur] + 1 : 1
            return acc
        }, {})
        console.log(objFromArr2)
        var uniqueArray = arr1.filter(function (item, pos) {
            return a.indexOf(item) == pos;
        }).sort((a, b) => a - b)
        console.log(uniqueArray)
        for (let i = 0; i < uniqueArray.length; ++i) {
            let param = objFromArr1[uniqueArray[i]] == objFromArr2[uniqueArray[i] * uniqueArray[i]]
            if (param) {
                count += 1
            }
        }
    }
    if (count == uniqueArray.length){
        return true
    } else {
        return false
    }
}

let result = comp(a, b)
console.log(result)

