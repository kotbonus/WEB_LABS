const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumOfDigits(number) { //наша функция
    let sum = 0;

    for (let digit of number) {
        sum += parseInt(digit, 10);
    }
    console.log(`Сумма цифр числа "${number}" равна ${sum}`);
}
rl.question("Введите число: ", (answer) => {
    sumOfDigits(answer);
    rl.close();
});
