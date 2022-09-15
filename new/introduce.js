function User(name, age, type) {
    this.name = name
    this.age = age
    this.type = type
}


let man = new User('Alex', 25, 'idiot')
console.log(man.name, man.age, man.type)