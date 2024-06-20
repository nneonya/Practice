//Сделайте функцию, которая будет
//генерировать случайные числа от 1 до 10.
//Сделайте так, чтобы сгенерированное число
//было задержкой функции setTimeout в
//секундах. Оберните все это в промис. Пусть
//промис выполнится успешно, если
//сгенерировано число от 1 до 5, и с ошибкой -
//если от 6 до 10

function randomNumberPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        setTimeout(() => {
            if (randomNumber >= 1 && randomNumber <= 5) {
                resolve(`Success! The random number is ${randomNumber}`);
            } else {
                reject(`Error! The random number is ${randomNumber}`);
            }
        }, randomNumber * 1000);
    });
}