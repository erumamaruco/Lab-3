alert("Добро пожаловать в программу для перевода байтов в килобайты!");
var bytes = prompt('Введите количество байт');
var bytes = parseFloat(bytes);
var kilobytes = bytes / 1024;
alert('Количество килобайт: ' + kilobytes);