var myObject = {a: 2};
Object.defineProperty(myObject, "FAVORITE_NUMBER", {
    value: 42,
    writable: false,
    configurable: false,
});

for(let i in myObject){
    console.log(i); // a
}


Object.preventExtensions( myObject ); // dont let as add new keys in object

// myObject.b = 54 // TypeError

var obj = {
    a:2,
    b:3,
    c:4
}

Object.seal(obj) // Object.preventExtensions + configurable: false

// delete obj.a // TypeError
// obj.d = 3 // TypeErrof


var secondObj = {
    a:2,
    b:{f:55},
    c:4
}

Object.freeze(secondObj) // Object.seal + writable:false. Object only enumerable

// secondObj.a = 23 // TypeError

for(let d in secondObj){
    if (typeof secondObj[d] == 'object') {
        Object.freeze(secondObj[d])
    }
}

secondObj.b.f = 100
console.log(secondObj.b.f)