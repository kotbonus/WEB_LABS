function Array(arr, rotations) {
    if (arr.length === 0 || rotations === 0) {
        console.log(arr.join(' '));
        return;
    }
    const Rotations = rotations % arr.length;
    const rotatedArray = arr.slice(Rotations).concat(arr.slice(0, Rotations));
    console.log(rotatedArray.join(' '));
}

Array([51, 47, 32, 61, 21], 2);
Array([32, 21, 61, 1], 4);
Array([2, 4, 15, 31], 5);