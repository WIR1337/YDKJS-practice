var a = {
    c: 2,
    d: 20
}

Object.defineProperty(a, 'b', {
    value: 100,
    enumerable: false,
    writable: true,
    configurable: true
})

for(let i in a) {
    console.log(i); // c , d
}
