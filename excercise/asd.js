function solution(number) {
    if (number <= 0) { return 0 }

    var allNumbers = [];
   
    for (let i = 0; i < number; ++i) {
        if (!String(i / 3).includes('.') || !String(i / 5).includes('.')) {
            allNumbers.push(i)
        }
    }
    console.log(allNumbers)

    if (allNumbers.length != 0) { return result = allNumbers.reduce((acc, cur) => { return acc + cur }) } else { return false }
}


let res = solution(10)
console.log(res)