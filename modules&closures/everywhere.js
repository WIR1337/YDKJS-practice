function makeArmy() {

    let shooters = [];

    for (let i = 0; i < 10; i++) {
        shooters.push(function () {
            alert(i); // выводит свой номер
        });
    }

    return shooters;
}

var army = makeArmy();

army[0](); // 0
army[5](); // 5
