var a = {}

Object.defineProperty(a,'b', {
    value: 'Alexander',
    writable: true,
    configurable: false, // non configurable
    enumerable: true
})
console.log(a.b);

// Object.defineProperty(a,'b', {
//     value: 2,
//     configurable: true, // can't change this property TypeErrof
//     writable: true,
//     enumerable: true
// })

Object.defineProperty(a, 'c', {
    value: 5,
    writable: true,
    configurable: false,
    enumerable: true
})
a.c = 55
console.log(a.c);
Object.defineProperty(a, 'c', {
    value: 1,
    enumerable: true,
    writable: false,
    configurable: false
})
// a.c = 5
// Object.defineProperty(a, 'c', {
//     value: 1,
//     enumerable: true,
//     writable: true,
//     configurable: false
// })

// delete a.c // if property non configurable we can't delete this TypeErrof
console.log(a.c);