/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3)
и вернуть полученное значение (использовать switch).*/

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

function mathOperation(x, y, operation) {
    switch (operation) {
        case '+':
            return plus(x, y);
        case '-':
            return minus(x, y);
        case '*':
            return multiple(x, y);
        case '/':
            return division(x, y);

    }
}
var res = mathOperation(12, 24, '*');
alert(res);