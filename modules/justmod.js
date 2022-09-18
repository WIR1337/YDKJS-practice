var mod = (function () {
    var modules = {}

    function define(name, arr, yourFunc) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = modules[arr[i]]
        }
        modules[name] = yourFunc.apply(yourFunc, arr)
    }
    function get(name) {
        return modules[name]
    }

    return {
        define: define,
        get: get
    }

})()

mod.define('sayName', [], function () {
    function sayName(name) {
        console.log(`My name is ${name}`)
    }
    return {
        sayName: sayName
    }
})

// mod.get('sayName').sayName('Alex')

mod.define('yourProfession', [], function () {
    function sayProf(company) {
        console.log(`Im working at ${company}`)
    }
    return {
        sayProf: sayProf
    }
})

// mod.get('yourProfession').sayProf('Bitmask.io')

mod.define('takeInfo', ['sayName', 'yourProfession'], function (a, b) {
    function awesome() {
        a.sayName('Alexander')
        b.sayProf('Google !')
    }
    return {
        awesome: awesome
    }
})

mod.get('takeInfo').awesome()

