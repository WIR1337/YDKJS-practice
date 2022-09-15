function User() {
    this.name = 'Alex'

    return {name: 'John'}
}

let a = new User()
console.log(a.name)


function Man() {
    this.name = 'Alex'

    return;
}

let b = new Man()
console.log(b.name)