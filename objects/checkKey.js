var qwe = {
    a: 2
};
Object.prototype.b = 'property B from Prototype'

/*
Оператор in проверяет ключ объекта захватывая в том числе,
его прототип 

hasOwnProperty не охватывает прототип обхекта
*/

console.log(("a" in qwe));// true
console.log(("b" in qwe));// true
console.log(qwe.hasOwnProperty( "a" ));	// true
console.log(qwe.hasOwnProperty( "b" ));	// false
