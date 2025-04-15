function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "yes";
    } else {
        return "no";
    }
}


console.log(isLeapYear(1944));
console.log(isLeapYear(2002));
console.log(isLeapYear(2400));