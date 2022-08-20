
// Выражения немедленно вызываемых функций (Immediately Invoked Function Expressions (IIFEs)
(function IIFE() {
    console.log("Hello!");
})();
// "Hello!"


var a = 42;

(function IIFE() {
    var a = 10;
    console.log(a);	// 10
})();

console.log(a);		// 42