/*Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
Доска должна быть верно разлинована на черные и белые ячейки. Строки должны нумероваться числами от 1 до 8,
столбцы — латинскими буквами A, B, C, D, E, F, G, H.*/

var table = document.createElement("table");
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
for (var i = 0; i < 9; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 9; j++) {
        var td = document.createElement('td');
        if (i == 0 && j == 0) {

        } else if (i == 0) {
            td.innerText = letters[j - 1]
            td.style.textAlign = 'center'
        } else if (j == 0) {
            td.innerText = i
        } else if (i % 2 == j % 2) {
            td.style.height = '60px'
            td.style.width = '60px'
        } else {
            td.style.height = '60px'
            td.style.backgroundColor = 'black'
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);

