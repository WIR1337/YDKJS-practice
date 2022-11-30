class Animal {
    name = 'animal';
  
    constructor() {
      console.log(this.name, this.age); // родительский конструктор всегда использует свои поля , а не переопределенные
    }
  }
  
  class Rabbit extends Animal {
    name = 'rabbit';
    age = 25
  }
  
//   new Animal(); // animal
//   new Rabbit(); // animal