let balance = 2000
const tax_rate = 0.08

let phone = 135
let accessory = 9

let sumWithTax = phone + accessory + ((phone + accessory) * tax_rate)

while (sumWithTax <= balance) {
    balance = balance - sumWithTax
    console.log(`Вы сделали покупку на сумму: ${sumWithTax.toFixed(2)}$\nОстаток средст на счете: ${balance.toFixed(2)}$`)
} 

let sumForBuy = sumWithTax - balance

console.log(`Недостаточно средств!\nВаш баланс: ${balance.toFixed(2)}$\nНедостаточно:${sumForBuy.toFixed(2)}$`)


