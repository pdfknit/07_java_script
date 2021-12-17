/*Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.*/

function plus(x, y){
   return x + y
}

function minus(x, y){
   return x - y
}

function multiple(x, y){
   return x * y
}

function division(x, y){
    if (y == 0)
        return 'Ошибка. Невозможно разделить на 0'

    else
        return x / y;

}

var a = 1
var b = 0
alert(a + ' + '  + b + ' = ' + plus(a, b));
alert(a + ' - ' + b + ' = ' + minus(a, b));
alert(a + ' * ' + b + ' = ' + multiple(a, b));
alert(a + ' / ' + b + ' = ' + division(a, b));
