//Напишите функцию, которая принимает
//массив с числами и находит сумму квадратов
//элементов этого массива.

function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }
    return sum;
}

