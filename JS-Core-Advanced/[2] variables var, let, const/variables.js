//Напишите код, в котором попытаетесь
//обратиться к переменной до её объявления с
//использованием var, let и const. Определите,
//какие переменные допускают такое
//использование, а какие нет.


    console.log(varVariable); // undefined

    var varVariable = "It is a var variable";

    //console.log(letVariable); // ReferenceError

    let letVariable = "It is a let variable";

    //console.log(constVariable); // ReferenceError

    const constVariable = "It is a const variable";

//переменные, объявленные с использованием var, 
//поднимаются (hoisted) в начало области видимости, 
//их значение будет undefined до фактического объявления

//переменные, объявленные с использованием let и const, 
//не поднимаются  и не могут быть использованы
//до своего фактического объявления