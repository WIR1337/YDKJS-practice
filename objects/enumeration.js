var myObject = {};
Object.defineProperty(
    myObject,
    "a",
    // сделаем `a` перечисляемым, как обычно
    { enumerable: true, value: 2 }
);
Object.defineProperty(
    myObject,
    "b",
    // сделаем `b` неперечисляемым
    { enumerable: false, value: 3 }
);

console.log(myObject.propertyIsEnumerable( "a" ))
console.log(myObject.propertyIsEnumerable( "b" ))

console.log(Object.keys(myObject)) // возвращает массив всех перечисляемых свойств
console.log(Object.getOwnPropertyNames( myObject )); // возвращает массив всех свойств - перечисляемых или нет.

