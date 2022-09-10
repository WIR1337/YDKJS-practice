function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];

    function doSomething() {
        console.log(something);
    }

    function doAnother() {
        console.log(another.join(" ! "));
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}

var foo = CoolModule();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3


function myModule() {
    return {
        func1: () => {
            console.log('func1')
        },
        func2: () => {
            console.log('func2')
        }
    }
}
const assets = myModule()

assets.func1()
assets.func1()