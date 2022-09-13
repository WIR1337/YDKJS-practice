var MyModules = (function Manager() {
    var modules = {}; 

    function define(name, deps, impl) {
        console.log(name,deps,impl)
        for (var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
            console.log(deps[i])
            console.log(modules[deps[i]])
        }
        modules[name] = impl.apply(impl, deps);
        console.log(modules[name])
    }

    function get(name) {
        return modules[name];
    }

    return {
        define: define,
        get: get
    };
})();

MyModules.define( "bar", [], function(){
	function hello(who) {
		return "Let me introduce: " + who;
	}

	return {
		hello: hello
	};
} );