var obj = {
    count: 0,
    cool: function coolFn() {
        function qwe() {
            console.log(this.count)
        }
        return qwe.bind(obj)
    }
};

let a = obj.cool();
a() // 0


var obj = {
    count: 0,
    cool: function coolFn() {
        setTimeout(() => {
            console.log(this.count)
        }, 100);
    }
};

obj.cool(); // 0


var obj = {
    count: 0,
    cool: function coolFn() {
        setTimeout(function qwe() {
            console.log(this.count)
        }.bind(this), 100);
    }
};

obj.cool(); // 0