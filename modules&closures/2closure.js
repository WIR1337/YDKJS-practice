/*
Замыкание — это когда функция умеет запоминать и имеет доступ к 
лексической области видимости даже тогда, когда эта функция 
выполняется вне своей лексической области видимости.
*/

// function foo() {
// 	var a = 2;

// 	function bar() {
// 		console.log( a ); // 2
// 	}
// 	return bar
// }

// let qwe = foo();
// qwe()


// function foo() {
// 	var a = 2;

// 	function baz() {
// 		console.log( a ); // 2
// 	}

// 	bar( baz );
// }

// function bar(fn) {
// 	fn(); // смотри мам, я видел замыкание!
// }
// foo()


var fn;

function foo() {
    var a = 2;

    function baz() {
        console.log(a);
    }

    fn = baz; // присваиваем `baz` глобальной переменной
}

function bar() {
    fn(); // смотри мам, я видел замыкание!
}

foo();

bar(); // 2