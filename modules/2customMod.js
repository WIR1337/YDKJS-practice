var MyMod = (function Employe() {
    var modules = {}

    function newEmploye(name, args, yourFunc) {
        for (var i = 0; i < args.length; i++) {
            args[i] = modules[args[i]];
        }
        // сделать еще 5 примеров с этим нюансом
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
MyMod.newEmploye('foo', ['Rick'], function (param) {
    function awesome() {
        param.sayHi('awesome !')
    }

    return {
        awesome: awesome
    }
})

let b = MyMod.get('foo')
let a = MyMod.get('Rick')

a.sayHi('Alexander')
b.awesome()