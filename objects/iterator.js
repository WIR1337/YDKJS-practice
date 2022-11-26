var myObject = {
    a: 2,
    b: 3
};
Object.defineProperty( myObject, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: function() {
        var o = this;
        var idx = 0;
        var ks = Object.keys( o );
        return {
            next: function() {
                // console.log(`value: ${o[ks[idx++]]}`)
                return {
                    value: o[ks[idx++]],
                    done: (idx > ks.length)
                };
            }
        };
    }
} );
// перебираем `myObject` вручную
var it = myObject[Symbol.iterator]();
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
it.next(); // { value:undefined, done:true }
// перебираем `myObject` с помощью `for..of`
for (var v of myObject) {
    console.log( v );
}
// 2
// 3