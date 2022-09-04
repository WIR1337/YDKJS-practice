let arr1 = [5, 8, 4, 2, 5, 8, 7, 7, 9, 9, 7, 7, 7, 9, 3];
let arr2 = [49, 81, 25, 49, 16, 50, 64, 49, 9, 25, 81, 4, 64, 81, 49];


const numbers = [4, 3, 3, 1, 15, 7, 4, 19, 19]; // исходный массив

// получаем объект в котором ключ - это элемент массива,
// а значение - количество вхождений
// { '4': 2, '3': 2, '1': 1 ... }
const countItems = numbers.reduce((acc, item) => {
    console.log(item)
    console.log(acc)
  acc[item] = acc[item] ? acc[item] + 1 : 1; // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
  console.log(acc)
  return acc;
}, {});

// обрабатываем ключи объекта
const result = Object.keys(countItems).filter((item) => countItems[item] > 1);
console.dir(result); // => ['3', '4', '19']