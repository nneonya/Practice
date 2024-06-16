//Напишите функцию, которая принимает
//число и выводит в консоль сумму первой и
//последней цифры этого числа.

function sumFirstAndLastDigit(number) {

    const numStr = number.toString();
    
    const firstDigit = parseInt(numStr.charAt(0));
    const lastDigit = parseInt(numStr.charAt(numStr.length - 1));
    

    const sum = firstDigit + lastDigit;
    
    console.log(sum);
}

