"use strict";
// Нужно создать функцию которая будет возводить число в степень

// Запрашиваем у пользователя число (с помощью prompt)
// Запрашиваем у пользователя степень, в которую это число нужно возвести (с помощью prompt)
// Создаем функцию которая принимает 2 аргумента (число, степень)
// Задаем аргументу который принимает степень значение по умолчанию 1
// Внутри функции нужно написать проверку, если аргументы не являются числами завершить функцию с указанием того, что пользователь ввел неправильные данные, например (return ‘some error’)
//  Если проверка прошла успешно, то возвести число в степень (работаем с аргументами функции)
// Вернуть результат выполнения функции и завершить ее
// Результат вызова функции записать в переменную и вывести пользователю через alert()

let number= prompt ('enter number');
let exponent=prompt('enter num for pow');
let result=pow(number, exponent);
alert(result);

function pow(number, exponent=1){
    let num=number;
    let exp=exponent;
    if(isNaN(num)||isNaN(exp)||num===null||num.trim()===''){
        return "you've entered incorrect data";
    }
    else{
        return Math.pow(num, exp)
    }
}