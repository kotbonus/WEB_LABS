function search() {
    const searchText = document.getElementById('searchText').value.toLowerCase();
    const towns = document.querySelectorAll('#towns li');
    let matches = 0;
    towns.forEach(town => {
        if (town.textContent.toLowerCase().includes(searchText) && searchText !== '') {
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            matches++;
        } else {
            town.style.fontWeight = 'normal';
            town.style.textDecoration = 'none';
        }
    });
    document.getElementById('result').textContent = `${matches} matches found`;
}