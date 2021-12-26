/*добавление в корзину из прошлого урока*/

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


/*Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:*/

let cart_div = document.getElementById("cart")

if (cart.length > 0) {
    textForCart = 'В корзине: \n' + cart.length + ' товар(а, ов)  на сумму ' + countCartPrice(cart) + ' рублей'
} else {
    textForCart = 'Корзина пуста'
}
let p = document.createElement('p')
p.innerText = textForCart
cart_div.style.maxWidth = "100px"
cart_div.appendChild(p)

