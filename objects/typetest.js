function C() {}
function D() {}

// var a = new C
// console.log(a instanceof C);

// C.prototype = {}
// console.log(a instanceof C, C.prototype);

// C.prototype = Object.prototype;
// console.log(a instanceof C, C.prototype);


console.log(C.prototype == D.prototype); // false
// Why false ?