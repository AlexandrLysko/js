/*Задача 1 (while)
Задать количество тарелок и количество моющего средства.
Моющее средство расходуется из расчета 0,5 на одну тарелку.
В цикле выводить сколько моющего средства осталось после мытья каждой тарелки
В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.*/

var tar = 12;
var fairy = 56;
var i = 0;
while ((i <= tar) || (i <= fairy)) {
	i++;
	var m = fairy - i * 0.5;
	if ((m < 0 ) || (i > tar)) continue;
	console.log("tar: ", i, "fairy: ", m);
}



/*Задача 2
Создать таблицу соответствия между весом в фунтах и весом в килограммах для дначений от 1 до 10
*/

var z = 10;
var kg = 0;
while (kg <= z) {
	kg++;
	var funt = kg * 2.20462;
	console.log(kg, "kg", " = ", funt, "funt");
}
	


/*Задание 3
Посмотреть, как работают методы для работы с массивами: join, slice, indexOf/lastIndexOf, concat.
Разобрать по 1му примену на каждый из них. В субботу обсудим*/

//Он берет массив и склеивает его в строку, используя str как разделитель.

var arr = ['Маша', 'Петя', 'Марина', 'Василий'];

var str = arr.join(';');

console.log( str ); // Маша;Петя;Марина;Василий



//Метод slice(begin, end) копирует участок массива от begin до end, не включая end. Исходный массив при этом не меняется.

var arr = ["Почему", "надо", "учить", "JavaScript"];

var arr2 = arr.slice(1, 3); // элементы 1, 2 (не включая 3)

console.log( arr2 ); // надо, учить



//В следующем примере мы удалим 3 элемента и вставим другие на их место:
var arr = ["Я", "сейчас", "изучаю", "JavaScript"];

// удалить 3 первых элемента и добавить другие вместо них
arr.splice(0, 3, "Мы", "изучаем");

console.log( arr ); // теперь ["Мы", "изучаем", "JavaScript"]


//Метод arr.concat(value1, value2, … valueN) создаёт новый массив, в который копируются элементы из arr, а также value1, value2, ... valueN.

var arr = [1, 2];
var newArr = arr.concat(3, 4);

console.log( newArr ); // 1,2,3,4


//Метод «arr.indexOf(searchElement[, fromIndex])» возвращает номер элемента searchElement в массиве arr или -1, если его нет.

var arr = [1, 0, false];

console.log( arr.indexOf(0) ); // 1
console.log( arr.indexOf(false) ); // 2
console.log( arr.indexOf(null) ); // -1

//Метод «arr.lastIndexOf(searchElement[, fromIndex])» ищет справа-налево: с конца массива или с номера fromIndex, если он указан.




/*Задача 4
Есть три вершины. Координаты вершин (x1, x2), (y1, y2), (z1, z2) заданы как целые числа. Нужно определить - является ли треугольник с заданными координатами прямоугольным.
В решении использовать только математические и логические операторы. Результат в консоль.
Обязательное условие: все вычисления производить только с целыми числами. Любой переход в дробные числа запрещен!
*/

x = [1,4]; // вершина x по шкале[x,y]
y = [1,2]; // вершина y по шкале[x,y]
z = [3,4]; // вершина z по шкале[x,y]

// рассчитаем длинну сторон по формуле ((X2-X1)²+(Y2-Y1)²)², потом определим угол применив теорему Пифагора

let a = (x[0]-y[0])*(x[0]-y[0]) + (x[1]-y[1])*(x[1]-y[1]);
let b = (x[0]-z[0])*(x[0]-z[0]) + (x[1]-z[1])*(x[1]-z[1]);
let c = (y[0]-z[0])*(y[0]-z[0]) + (y[1]-z[1])*(y[1]-z[1]);
console.log("Длина сторон треугольника в квадрате: a = ", a, " b = ", b, " c = ", c);

if ((a > b && a > c && a === b+c) || (b > a && b > c && b === a+c) || (c > b && c > a && c === b+a)){
    console.log("Треугольник имеет прямой угол");
} else {
    console.log("У треугольника нет прямых углов");
}


/*Задача 5
Создать массив из чисел. Выполнить сортировку массива по возрастанию методом пузырька. Запрещено использовать стандартные методы.*/

var numArr = [1, 4, 3, 9, 5];
var n = numArr.length;
 for (var i = 0; i < n-1; i++)
 { for (var j = 0; j < n-1-i; j++)
 { if (numArr[j+1] < numArr[j])
 { var t = numArr[j+1]; numArr[j+1] = numArr[j]; numArr[j] = t; }
 }
 } 
console.log(numArr);

