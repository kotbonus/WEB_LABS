const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function combineCharacters(town, population, area) {
    console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
}
rl.question("Введите название города: ", (townName) => {
    rl.question("Введите население: ", (population) => {
        rl.question("Введите площадь (кв. км): ", (area) => {
            combineCharacters(townName, population, area);
            rl.close();
        });
    });
});
