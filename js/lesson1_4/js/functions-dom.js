// JavaScript Document
"use strict";
/*1.Написать функцию calc(a, b, operator), которая в зависимости от оператора будет складывать, умножать, вычитать или делить.
Не забывайте про проверку типа введенных данных, и про деление на 0 (на 0 делить нельзя)*/

function calc (a, b, operator){
	var result;
	var metod;
	if (typeof a !== "number" && typeof b !== "number") {
		console.log("Error");
		
	} else if (operator === '+') {
		result = a + b;
		metod = "(Cумма)";
				
	} else if (operator === '-') {
		result = a - b;
		metod = "(Вычитаем)";
		
		
	} else if (operator === '*') {
		result = a * b;
		metod = "(Умножаем)";
		
		
	} else if (operator === '/' && operator !== 0) {
		result = a / b;
		metod = "(Делим)";
		
	} 
	
	console.log("Задание 1: " + result + " " + metod); 
		
}

calc(5, 2, '-');


/*2. Дано целое число n. Вычислите сумму его цифр. Использовать только рекурсию.*/


var x = 129;
function sumDigit(x) {
	if (x < 10) {
		return x;
	} else {
            return x % 10 + sumDigit((x - (x % 10)) / 10);
	}
}

console.log(sumDigit(x));


/*3. (на замыкание)
Написать функцию, которая возвращает новую функцию, которая увеличивает/уменьшает переданное число на указанный при карировании шаг.*/

var a = 14; // число
var create = function(x) {
   return function() {
	  console.log(a + x);
   }
}
var result = create (2); // шаг
result();


