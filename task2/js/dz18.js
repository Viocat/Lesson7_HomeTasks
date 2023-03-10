"use strict";

// Вам нужно написать реализацию функции padString, которая принимает 4 аргумента:

// строку
// число, которое является длинной строки, которую мы хотим получить в результате выполнения функции
// символ (строка длинной 1 символ) — которым дополнится строка, если это будет необходимо
// параметр булеан (true или false), который определяет, добавлять символы слева или справа (по умолчанию справа)
// Обязательно при написании функции необходимо проверить аргументы, которые мы передали, и если каких-то аргументов нет, то вернуть из функции строку с ошибкой (return ‘some error’). Сообщение с ошибкой должно быть разное в зависимости от того условия, по которому не прошла проверка.

// Результат вызова функции нужно вывести в консоль — после завершения функции.

// Например:

// Вызов padString(‘hello’, 8, ‘*’) вернет строку hello***

// А вызов padString(‘hello’, 6, ‘*’, false) вернет строку *hello

// Вызов padString(‘hello’, 2) вернет ‘he’ — если число меньше, чем размер введенной строки, нужно строку обрезать при помощи метода substr



function padString(string, newLength, symbole, symboleLocation = true) {

    if (typeof string !== 'string' || !string || string.trim().length < 1) return 'str error';
    if (typeof newLength !== 'number') return 'new str length error';
    if (!symbole || symbole.toString().trim().length > 1) return 'symbole error';
    //toString для symbole -  из соображений что пользователь олень и передаёт символы не обязательно в виде строки

    let str = string;
    let symbl = symbole.toString();

    if (newLength < str.length) return str.substring(0, length);
    for (let i = 0, tmp = symbl; i < newLength - str.length; i++) {
        symbl += tmp;
    }
    if (symboleLocation === false) return symbl + str;
    return str + symbl;

}

console.log(padString(' 12', 10, '#'));
console.log(padString('abc', 5, 3, false));
console.log(padString('abc', 10, '54*', false));
console.log(padString('', 10, '54*', 1));
console.log(padString('1', 10, '*', true));
console.log(padString('lol', 4, '%', false));
console.log(padString(null, 4, '%', false));
console.log(padString('hm',null, '%', false));









// let string=prompt('Wright something');
// let newLength=prompt('enter length of new string');
// let symbole=prompt('enter one symbole you`d like to use');
// let symboleLocation=Boolean(prompt('to locate symbol before text - type anything and press "ok"\n to leave default - press "ok" or "cansel"'));

// // console.log(symboleLocation);

// let newString= padString(string, newLength, symbole, symboleLocation)
// alert(newString);

// function padString(string, newLength, symbole, symboleLocation){
//     let str=string;
//     let length=newLength;
//     let symbl=symbole;
//     let location=symboleLocation;
//     let result='';

//     if(str===null||str.trim()===''){
//         result+='error string data\n';
//     } if(isNaN(length)||length===null||length.trim()===''){
//         result+='error length of new string data\n';
//     } if(symbl.length>1){
//         result+='error symbol data';
//     }

//     if(result!==''){
//         return result;
//     }else{
//         if(length<str.length){
//             result=str.substring(0,length);
//         }else{
//             for(let i=1, tmp=symbl;i<length-str.length;i++){
//                 symbl+=tmp;
//             }
//             location===true?result=symbl+str:result=str+symbl;
//         }
//     }
//     console.log('finished result:' + result)
//     return result;
// }
