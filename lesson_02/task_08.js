// С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.

result = 1;

function power(val, pow){
    if (pow > 0){
        result *= val;
        return power(val, --pow);
        }
    else {
        return result;
    }
}

alert('Результат: ' + power(2,10))