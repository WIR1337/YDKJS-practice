export var MyModules = (function Manager() {
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
    return {
        define: define,
        get: get
    };
})();

MyModules.define("bar", [], function () {
    function hello(who) {
        return "Let me introduce: " + who;
    }

    return {
        hello: hello
    };
});

MyModules.define('sayHi', [], function () {
    function qwe(name) {
        return `${name} у тебя получилось !`
    }
    return {
        qwe: qwe
    }
})

MyModules.define("foo", ["sayHi", "bar"], function (sayHi, bar) {
    var hungry = "Alexander";

    function awesome() {
        console.log(sayHi.qwe('Alexander'));
        console.log(bar.hello('Alexander'));
    }

    return {
        awesome: awesome
    };
});
MyModules.get('foo').awesome()

