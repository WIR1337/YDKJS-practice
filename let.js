if (true) {
    var a = 2
}

console.log(a) // Мы увидим 2 потому что var имеет функциональную область видимости


if (true) {
    let b = 2
}

console.log(b) // ReferenceError потому что let пивязывается к блоку {...}

// Аналогично происходит и с for
