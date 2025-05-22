function isMagicMatrix(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    const rowCount = matrix.length; //строки столбы
    const colCount = matrix[0].length;
    if (rowCount !== colCount) { //квадратная матрица
        return false;
    }

    const targetSum = matrix[0].reduce((sum, num) => sum + num, 0); //целая сумма

    for (let i = 1; i < rowCount; i++) { //проверка строк
        const rowSum = matrix[i].reduce((sum, num) => sum + num, 0);
        if (rowSum !== targetSum) {
            return false;
        }
    }

    for (let j = 0; j < colCount; j++) { //прлверка столбцов
        let colSum = 0;
        for (let i = 0; i < rowCount; i++) {
            colSum += matrix[i][j];
        }
        if (colSum !== targetSum) {
            return false;
        }
    }

    return true;
}

console.log(isMagicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));

console.log(isMagicMatrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));

console.log(isMagicMatrix([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]));