function solution(number) {
    if (number < 0) { return 0 }

    var allNumbers = [];

    for (let i = 0; i <= number; ++i) {
        let RESULT_3 = i / 3
        let RESULT_5 = i / 5
        if (!String(RESULT_3).includes('.')) {
            allNumbers.push(i)
        }
        if (!String(RESULT_5).includes('.')) {
            allNumbers.push(i)
        }
    }
    var uniqArr = allNumbers.filter(function (item, pos) {
        return allNumbers.indexOf(item) == pos;
    }).sort((a,b) => b - a)
    console.log(uniqArr)
    
    if (uniqArr.length != 0) { return result = uniqArr.reduce((acc, cur) => { return acc + cur }) } else { return false }
}


let a = solution(10)
console.log(a)
