function updateInventory(currentStock, delivery) {
    const inventory = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        const product = currentStock[i];
        const quantity = parseInt(currentStock[i + 1]);
        inventory[product] = quantity;
    }

    for (let i = 0; i < delivery.length; i += 2) {
        const product = delivery[i];
        const quantity = parseInt(delivery[i + 1]);

        if (inventory[product]) {
            inventory[product] += quantity;
        } else {
            inventory[product] = quantity;
        }
    }

    return inventory;
}

const currentStock = [
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
];

const delivery = [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
];

const inventory = updateInventory(currentStock, delivery);

for (const [product, quantity] of Object.entries(inventory)) {
    console.log(`${product} -> ${quantity}`);
}