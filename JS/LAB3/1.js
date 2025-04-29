function Array(numbers) {
    const newArray = numbers.map((num, index) => {
        if (num % 2 === 0) {
            return num + index;
        } else {
            return num - index;
        }
    });

    const Sum = numbers.reduce((sum, num) => sum + num, 0);
    const newSum = newArray.reduce((sum, num) => sum + num, 0);

    console.log(newArray);
    console.log(Sum);
    console.log(newSum);
}

Array([5, 15, 23, 56, 35]);
Array([-5, 11, 3, 0, 2]);
