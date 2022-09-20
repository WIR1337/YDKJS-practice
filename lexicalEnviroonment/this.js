var obj = {
    id: "awesome",
    cool: function coolFn() {
        console.log(this.id);
    }
};

var id = "not awesome";

obj.cool(); // awesome

/* 
obg.cool in setInterval lost this
*/

setTimeout(obj.cool, 100); // undefined

// we can create shell function
setTimeout(() => {obj.cool()}, 100); // awesome


// or use bind
setTimeout(obj.cool.bind(obj), 100); // awesome


