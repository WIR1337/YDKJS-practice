function makeAdder(x) {
    // параметр `x` - внутренняя переменная

    // внутренняя функция `add()` использует `x`, поэтому
    // у нее есть "замыкание" на нее
    function add(y) {
        return y + x;
    };

    return add;
}

var plusOne = makeAdder(3);

console.log(plusOne(2))