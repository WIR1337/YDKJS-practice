var myObject = {
    a: 2
}

let b = Object.getOwnPropertyDescriptor(myObject, 'a')

// console.log(b);

var obj = {}

// defineProperty это способ задать свойство обхекту и настроить его конфигурацию
Object.defineProperty(obj, 'a', {
    value: 'Hello',
    writable: true,
    configurable: true,
    enumerable: true
})

// console.log(obj.a)

Object.defineProperty(obj, 'b', {
    value: 3,
    writable: false, // not writable
    configurable: true,
    enumerable: true
})
// obj.b = 5 // TypeError: Cannot assign to read only property 'b'
