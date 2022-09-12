function solution(number) {
    if (number < 0) { return 0 }

    var multi3 = []
    var multi5 = []

    for (let i = 0; i <= number; ++i) {
        let RESULT_3 = i / 3
        let RESULT_5 = i / 5
        if (!String(RESULT_3).includes('.')) {
            multi3.push(i)
            console.log(i)
        }
        if (!String(RESULT_5).includes('.')) {
            multi5.push(i)
            console.log(i)
        }
    }
    var sumArr = [...multi3, ...multi5]
    var uniqArr = sumArr.filter(function (item, pos) {
        return sumArr.indexOf(item) == pos;
    })
    console.log(uniqArr)
    if (uniqArr.length != 0) { return result = uniqArr.reduce((acc, cur) => { return acc + cur }) } else { return false }

    // console.log(multi3)
    // console.log(multi5)
    // console.log(uniqArr)
    // console.log(result)
}


let a = solution(0)
console.log(a)
