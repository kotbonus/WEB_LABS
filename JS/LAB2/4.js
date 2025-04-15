const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function  combineCharacters(num1, operator, num2) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Ошибка. Деление на ноль';
            break;
    }
    if (typeof result === 'number') {
        console.log(result.toFixed(2));
    } else {
        console.log(result);
    }
}
rl.question("Введите первое число: ", (firstNumber) => {
    rl.question("Введите оператор: ", (operator) => {
        rl.question("Введите второе число: ", (secondNumber) => {
            combineCharacters(parseFloat(firstNumber), operator, parseFloat(secondNumber));
            rl.close();
        });
    });
});
