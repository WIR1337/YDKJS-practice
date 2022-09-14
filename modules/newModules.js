var MyModules = (function Manager() {
    var modules = {};
    function define(name, deps, impl) {
        for (var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);
    }

    function get(name) {
        return modules[name];
    }
    // function return object with keys , and keys = functions
    return {
        define: define,
        get: get
    };
})();


MyModules.define('developer', [], function () {
    function whoIsIt(name) {
        console.log(`Let me introduce ${name}`)
    }

    return {
        whoIsIt: whoIsIt
    }
})


let a = MyModules.get('developer').whoIsIt('Alex')

let arr = ['developer']
MyModules.define('experience', arr, function () {
    function tellMeYourExp() {
        console.log('4 moths')
    }
    return {
        tellMeYourExp: tellMeYourExp
    }
})

MyModules.get('experience').tellMeYourExp()
console.log(arr[0].whoIsIt('Ivan'))