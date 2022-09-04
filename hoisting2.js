// if (true){
//     a = 1
//     console.log(a)
//     var a;
// }

// if (true){
//     b = 2
//     console.log(b) // ReferenceError , let не поднимается
//     let b;
// }

// Функциональные выржаения не поднимаются в отличие от декларации функции

foo() // TypeErrof , так как компилятор пытается вызвать переменную которая undefiend

var foo = function qwe() {
    let a = 5
    console.log()
}

//Как выглядит этот код на самом деле

var foo;

foo();

foo = function qwe() {
    let a = 5
    console.log()
}
