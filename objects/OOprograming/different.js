class Animal {
    showName() {  
      console.log('animal');
    }
  
    constructor(name) {
      this.showName(); 
      this.name = name

    }
  }
  
  class Rabbit extends Animal {
    name = 'Alexander'
    age = 25
    showName() {
      console.log('rabbit');
    }
  }
  
  let b = new Animal(); // animal
  let a = new Rabbit(); // rabbit
//   console.log(Object.keys(a))
  console.log(Object.keys(b))