//С помощью цикла while вывести все простые числа в промежутке от 0 до 100

const N = 100;
var digit = 2;
var resultList = [1, 2,]
let simple = true;

while (digit < N) {
    digit++
    let i = 1
    while (i < result_list.length) {
        if (digit % resultList[i] == 0) {
            simple = false
            break
        } else {
            simple = true
            i++
        }
    }

    if (simple == true) {
        resultList.push(digit)
    }

}
alert(resultList)