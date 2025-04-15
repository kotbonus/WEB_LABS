const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function combineCharacters(binaryString) {
    const decimalValue = parseInt(binaryString, 2);
    console.log(decimalValue);
}
rl.question("Введите 8-битное двоичное число: ", (binaryInput) => {
    combineCharacters(binaryInput);
    rl.close();
});
