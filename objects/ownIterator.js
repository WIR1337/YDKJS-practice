var a = {
    a: 'Alexander',
    b: 'N',
    c: 25
}


Object.defineProperty(a, Symbol.iterator, {
    writable: false,
    enumerable: false,
    configurable: true,
    value: function() {
        var o = this
        var idx = 0
        var ke = Object.keys(o)

        return {
            next: function() {
                return {
                    value: o[ke[idx++]],
                    done: (idx > ke.length)
                }
            }
        }
    }
})

for (let i of a){
    console.log(i);
}