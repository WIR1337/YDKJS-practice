class Api {
    constructor(name) {
        this.nameApi = name
    }
    calcSquare(num,multiplie){
        console.log(`${num} в ${multiplie} степени = ${num ** multiplie}`)
    }

    whatsDay() {
        console.log(`$Cегодня ${new Date}`)
    }

}


class Bot extends Api {
    constructor(id) {
        super('mr Dick')
        this.id = id
    }
    sayHi() {
        console.log(`Hi im Bot #${this.id}`);
    }
}

let a = new Bot(33)
console.log(a);

a.sayHi()
a.calcSquare(2,20)