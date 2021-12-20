/*В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.*/

let cart = {
    length: 0
}

function newItem(name, price) {
    let item = {
        name: name,
        price: price,
    }
    return item
}

function addToCart(item) {
    cart.length += 1
    cart[item.name] = item.price
}

function countCartPrice(full_cart) {
    let result = 0
    for (let curr_item in full_cart) {
        result += full_cart[curr_item]
    }
    result -= full_cart.length

    return (result)
}

item1 = newItem('Кружка новогодняя', 150)
item2 = newItem('Кружка новогодняя2', 500)
item3 = newItem('Кружка новогодняя3', 15)

addToCart(item1)
addToCart(item2)
addToCart(item3)

alert('Cумма в корзине: ' + countCartPrice(cart))

//Постаралась учесть задание 3 в task_02.js