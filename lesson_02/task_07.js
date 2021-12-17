// Сравнить null и 0. Попробуйте объяснить результат.

alert(null == 0) //false
alert (null == undefined) //true
alert (0 == undefined) //false

//похоже, что ноль не рассматривается как пустое неопределенное значение, в отличие от null и undefined