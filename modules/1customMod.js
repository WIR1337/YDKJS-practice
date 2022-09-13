let man = {
    name: 'alex',
    age: '25',
    type: 'developer'
}
let customMan = {}
function showKeys() {
    console.log(this.age,this.type)
    return this.name
}

customMan[1] = showKeys.apply(man)

console.log(customMan)