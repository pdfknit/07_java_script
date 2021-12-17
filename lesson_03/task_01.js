//С помощью цикла while вывести все простые числа в промежутке от 0 до 100

const N = 100;
var digit = 2;
var result_list = [1, 2,]
let simple = true;

while (digit < N) {
    digit++
    let i = 1
    while (i < result_list.length) {
        if (digit % result_list[i] == 0) {
            simple = false
            break
        } else {
            simple = true
            i++
        }
    }

    if (simple == true) {
        result_list.push(digit)
    }

}
alert(result_list)