var MyMod = (function Employe() {
    var modules = {}

    function newEmploye(name, args, yourFunc) {
        for (var i = 0; i < args.length; i++) {
            args[i] = modules[args[i]];
        }
        modules[name] = yourFunc.apply(yourFunc, args)
    }

    function get(name) {
        return modules[name]
    }


    return {
        newEmploye: newEmploye,
        get: get
    }
})();


MyMod.newEmploye('Rick', [], function () {
    function sayHi(name) {
        console.log(`Hello everyone im ${name}`)
    }

    return {
        sayHi: sayHi
    }
})
MyMod.newEmploye('foo', ['Rick'], function (hui) {
    function awesome() {
        hui.sayHi('awesome !')
    }

    return {
        awesome: awesome
    }
})

let b = MyMod.get('foo')
let a = MyMod.get('Rick')

console.log(a)
b.awesome()