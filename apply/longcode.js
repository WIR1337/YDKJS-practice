//  Глобальная переменная для демонстрации
var avgScore = "global avgScore";

// Функция
function avg(arrayOfScores) {
    //  Складываем все показатели
    var sumOfScores = arrayOfScores.reduce(function (prev, cur, index, array) {
        return prev + cur;
    });

    //  В этом случае this будет привязан к глобальному объекту, пока мы не выставим его с call() или apply()
    this.avgScore = sumOfScores / arrayOfScores.length;
}

var gameController = {
    scores: [20, 34, 55, 46, 77],
    avgScore: null
}

// Если мы выполним функцию avg, то this внутри функции будет привязана к глобальному объекту:
avg(gameController.scores);
// Вот, что получаем:
console.log(window.avgScore); // 46.4
console.log(gameController.avgScore); // null

//  Сбрасываем avgScore
avgScore = "global avgScore";

// Чтобы указать, что значение this привязано к gameController,
// Мы вызываем call() метод:
avg.call(gameController, gameController.scores);

console.log(window.avgScore); //global avgScore
console.log(gameController.avgScore); // 46.4