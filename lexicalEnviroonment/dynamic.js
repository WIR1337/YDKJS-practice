function foo() {
    console.log(a); // 2
}

function bar() {
    var a = 3;
    foo();
}

var a = 2;

bar();

// Область видимости не поерделяется тем где была вызванна 
// функция , а тем где она была объявленна