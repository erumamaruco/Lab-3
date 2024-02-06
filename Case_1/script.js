alert(' Добро пожаловать в программу для нахождения площади и периметра прямоугольника!');
var A = prompt('Введите a');
var A = parseFloat(A);
var B = prompt('Введите b');
var B = parseFloat(B);
var S = A * B;
var P = 2 * (A + B);
alert('Площадь = ' + S);
alert('Периметр = ' + P);