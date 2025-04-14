function calculateTotalPrice(count, group, day) {
    const prices = {
        "Студенты": {
            "Пятница": 8.45,
            "Суббота": 9.80,
            "Воскресенье": 10.46
        },
        "Корпоративная": {
            "Пятница": 10.90,
            "Суббота": 15.60,
            "Воскресенье": 16
        },
        "Обычная": {
            "Пятница": 15,
            "Суббота": 20,
            "Воскресенье": 22.50
        }
    };

    let pricePerPerson = prices[group][day];
    let totalPrice = count * pricePerPerson;

    if (group === "Студенты" && count >= 30) {
        totalPrice *= 0.85;
    } else if (group === "Корпоративная" && count >= 100) {
        totalPrice -= 10 * pricePerPerson;
    } else if (group === "Обычная" && count >= 10 && count <= 20) {
        totalPrice *= 0.95;
    }

    return `Общая цена: ${totalPrice.toFixed(2)}`;
}


console.log(calculateTotalPrice(30, "Студенты", "Воскресенье"));
console.log(calculateTotalPrice(40, "Обычная", "Суббота"));