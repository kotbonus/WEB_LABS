function findElements(arr1, arr2) {
    const Arr1 = arr1.map(item => String(item).toLowerCase());
    const Arr2 = arr2.map(item => String(item).toLowerCase());
    const commonElements = Arr1.filter((item, index) => {
        return Arr2.includes(item) && Arr1.indexOf(item) === index;
    });

    const originalCaseElements = [];
    for (const element of commonElements) {
        const originalIndex = arr1.findIndex(item =>
            String(item).toLowerCase() === element
        );
        if (originalIndex !== -1) {
            originalCaseElements.push(arr1[originalIndex]);
        }
    }

    originalCaseElements.forEach(element => console.log(element));
}

findElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);
findElements(
    ['R', 'u', 's', 's', 'i', 'a'],
    ['R', 'u', 't']
)
