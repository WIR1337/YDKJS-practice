let man = {
    name: 'alex',
    age: '25',
    type: 'developer'
}
let customMan = {}
function showKeys() {
    // console.log(this.age,this.type)
    return this.name
}

customMan[1] = showKeys.apply(man, ['type'])

// console.log(customMan)


let modules = {}

function asd() {
    function awesome() {
        console.log('Awesome!')
    }

    return {
        awesome: awesome
    }
}

modules['foo'] = asd.apply(asd, ['Rick'])

console.log(modules.foo.awesome())