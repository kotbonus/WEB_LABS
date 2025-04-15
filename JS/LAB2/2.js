const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function combineCharacters(char1, char2, char3) {
    const combinedString = char1 + char2 + char3;
    console.log(`Объединенные символы: ${combinedString}`);
}
rl.question("Введите первый символ: ", (firstChar) => {
    rl.question("Введите второй символ: ", (secondChar) => {
        rl.question("Введите третий символ: ", (thirdChar) => {
            combineCharacters(firstChar, secondChar, thirdChar);
            rl.close();
        });
    });
});
