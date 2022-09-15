function qwe(name,age) {
    this.name = name
    this.age = age
    console.log(this.name, this.age)
}

let a = {
    name: 'Alex',
    age: 25
}

let b = qwe.bind(a, 'Kate')
let res = b(20)
