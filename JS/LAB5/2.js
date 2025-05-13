function parseCities(cityData) {
    return cityData.map(cityString => {
        const [town, latitude, longitude] = cityString.split('|').map(item => item.trim());
        const formattedLat = parseFloat(latitude).toFixed(2);
        const formattedLng = parseFloat(longitude).toFixed(2);

        return {
            town,
            latitude: formattedLat,
            longitude: formattedLng
        };
    });
}

const inputCities = [
    'Moscow | 55.7522 | 37.6156',
    'Beijing | 39.913818 | 116.363625'
];

const cities = parseCities(inputCities);

cities.forEach(city => console.log(city));