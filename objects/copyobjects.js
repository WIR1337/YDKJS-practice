function anotherFunction() { console.log('Function anotherFunction'); }
var anotherObject = {
    c: true
};
var anotherArray = [];
var myObject = {
    a: 2,
    b: anotherObject,	// ссылка, а не копия!
    c: anotherArray,	// еще одна ссылка!
    d: anotherFunction
};

//<ref *1>


// Copy
let newObj = Object.assign({}, myObject)