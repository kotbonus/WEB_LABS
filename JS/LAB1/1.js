function determineAgeGroup(age) {
    if (age >= 0 && age <= 2) {
        return "младенец";
    } else if (age >= 3 && age <= 13) {
        return "ребенок";
    } else if (age >= 14 && age <= 19) {
        return "подросток";
    } else if (age >= 20 && age <= 65) {
        return "взрослый";
    } else if (age >= 66) {
        return "пожилой";
    } else {
        return "Неверный возраст";
    }
}


console.log(determineAgeGroup(20));
console.log(determineAgeGroup(1));
console.log(determineAgeGroup(100));
console.log(determineAgeGroup(11));
console.log(determineAgeGroup(16));