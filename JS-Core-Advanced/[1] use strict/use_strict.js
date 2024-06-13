//Напишите функцию, которая принимает
//строку и возвращает количество гласных
//букв в ней. Используйте строгий режим.

'use strict'

function countVowels(str) {

    const vowels = "AEIOUaeiou";
    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}
