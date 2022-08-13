let newTrans = [{ a: 1000, b: 25.11}, { a: 500, b: 2 }, { a: 135, b: 2 }, { a: 253, b: 2 }, { a: 300, b: 2 }]
let lastTrans = [{ a: 135, b: 2 }, { a: 253, b: 2 }, { a: 300, b: 2 }, { a: 100, b: 2 }, { a: 110, b: 2 }]

let count = 0

for (i = 0; i < newTrans.length; ++i) {
    for (let j = 0; j < lastTrans.length; ++j) {
        if (newTrans[i].a && newTrans[i].a !== lastTrans[j].a && newTrans[j].b) {
            ++count
        }
    }
    if (count == lastTrans.length) {
        console.log({
            value: newTrans[i].a,
            time: newTrans[i].b
        })
    }
    count = 0
}



//Практическая задача , выяснить как сравнить 2 массива


