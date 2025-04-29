function isMagicMatrix(matrix) {
    // Проверяем, что матрица не пустая
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    const rowCount = matrix.length;
    const colCount = matrix[0].length;
    if (rowCount !== colCount) {
        return false;
    }

    const targetSum = matrix[0].reduce((sum, num) => sum + num, 0);

    for (let i = 1; i < rowCount; i++) {
        const rowSum = matrix[i].reduce((sum, num) => sum + num, 0);
        if (rowSum !== targetSum) {
            return false;
        }
    }

    for (let j = 0; j < colCount; j++) {
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