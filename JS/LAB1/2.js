function roundNumber(number, precision) {
    if (precision > 15) {
        precision = 15;
    }
    return parseFloat(number.toFixed(precision));
}


console.log(roundNumber(3.1415926535897932384626433832795,25));
console.log(roundNumber(10.5, 3));