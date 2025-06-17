function search() {
    const searchText = document.getElementById('searchText').value.trim().toLowerCase();
    const towns = document.querySelectorAll('#towns li');
    let matches = 0;
    towns.forEach(town => {
        const townText = town.textContent.toLowerCase();
        const isMatch = searchText !== '' && townText.includes(searchText);
        town.style.fontWeight = isMatch ? 'bold' : 'normal';
        town.style.textDecoration = isMatch ? 'underline' : 'none';
        if (isMatch) matches++;
    });
    const resultElement = document.getElementById('result');
    resultElement.textContent = `${matches} ${matches === 1 ? 'match' : 'matches'} found`;
}