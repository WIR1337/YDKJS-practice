var a = 2;

foo();
// разобрать почему вызов функции раньше чем декларация
function foo() {
    a = 3;

    console.log(a);

    var a;

}

console.log(a);

// Выражения немедленно вызываемых функций (Immediately Invoked Function Expressions (IIFEs)
(function IIFE(){
	console.log( "Hello!" );
})();
// "Hello!"


var a = 42;

(function IIFE(){
	var a = 10;
	console.log( a );	// 10
})();

console.log( a );		// 42