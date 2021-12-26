/*Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
\в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить
следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
сообщение с помощью console.log и вернуть пустой объект.*/

function inToObject(digit) {
    if (digit < 1000) {

        let units = digit % 100 % 10
        let tens = (digit - units) / 10 % 10
        let hundreds = (digit - digit % 100) / 100
        let obj = {
            'units': units,
            'tens': tens,
            'hundreds': hundreds,

        }
        return obj
    } else {
        console.log('Число больше 999')
        let obj = {}
        return obj
    }

}

let input_digit = prompt("Введите число от 0 до 999");
result = inToObject(input_digit)
