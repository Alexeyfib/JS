/*
Math.round
Округляет до ближайшего целого
 alert( Math.floor(3.1) );  // 3
alert( Math.ceil(3.1) );   // 4
alert( Math.round(3.1) );  // 3

Для округления до нужной цифры после запятой можно умножить 
и поделить на 10 с нужным количеством нулей. 
Например, округлим 3.456 до 2-го знака после запятой:

var n = 3.456;
alert( Math.round(n * 100) / 100 ); // 3.456 -> 345.6 -> 346 -> 3.46
Таким образом можно округлять число и вверх и вниз.

*/