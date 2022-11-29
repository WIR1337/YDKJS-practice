// Syntax

/* 
class MyClass {
  // методы класса
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
*/

/* 
Для перечисления методов в классе не нужно
ставить ','. Синтаксис классов отличается
от литералов объектов.
*/
class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        alert(this.name);
    }
}

// Использование:
let user = new User("Иван");

console.log(typeof User); // function

console.log(User === User.prototype.constructor);  // true

console.log(User.prototype.sayHi);  // function sayHi

console.log(Object.getOwnPropertyNames(User.prototype));

