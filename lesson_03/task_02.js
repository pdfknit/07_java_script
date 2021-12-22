// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве.
// а) Организовать такой массив для хранения товаров в корзине

var cart = []
cart.push(['товар 1', 1000])
cart.push(['товар 2', 2000])
cart.push(['товар 3', 10])

// b) Организовать функцию countCartPrice, которая будет считать стоимость корзины
function countCartPrice(fullCart) {
    let result = 0
    for (let item of fullCart) {
        result += item[1]
    }
    return (result)
}

alert('Сумма в корзине: ' + countCartPrice(cart))