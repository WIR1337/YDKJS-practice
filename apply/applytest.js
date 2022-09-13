function qwe(par1) {
    this.name = par1
}

let obj = {}

qwe.apply(obj, ['John'])

let doSmth = function () {
    function hello(who) {
        return "Let me introduce: " + who;
    }

    return {
        hello: hello
    };
}

console.log(doSmth.apply(doSmth, []))

