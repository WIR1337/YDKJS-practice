/* 
Когда вы задаете свойству геттер или сеттер, 
оно определяется как «дескриптор доступа» 
(в противовес «дескриптору данных»)
*/

var a = {
    get a () {
        return 'JS'
    }
}

/*
Для дескрипторов доступа, характеристики дескриптора 
value и writable игнорируются
*/
Object.defineProperty(a, 'b', {
    // writable: false, // TypeError
    // value: 55, //TypeError
    get: function () {
        return 'Make happy with '+ this.a
    },
    enumerable:true
})

// console.log(a.a, a.b);



var myObject = {
    get a() {
        return this._a_;
    },
    set a(val) {
        this._a_ = val * 2;
    }
};

myObject.a = 2

// console.log(myObject._a_)
// console.log(myObject.a)


var qwe = {
    get a() {
        return this.b * 5
    },
    set a(v) {
        this.b = 2 * v 
    }
}

qwe.a = 5
console.log(qwe.a);