function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "yes";
    } else {
        return "no";
    }
}


console.log(isLeapYear(1984));
console.log(isLeapYear(2003));
console.log(isLeapYear(2400));