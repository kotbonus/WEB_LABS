function solve() {
   document.getElementById('searchBtn').addEventListener('click', () => {
      const searchText = document.getElementById('searchField').value.toLowerCase();
      const rows = document.querySelectorAll('.container tbody tr');
      rows.forEach(row => row.classList.remove('select'));
      if (searchText.trim() === '') return;
      let matches = 0;
      rows.forEach(row => {
         if (row.textContent.toLowerCase().includes(searchText)) {
            row.classList.add('select');
            matches++;
         }
      });
      document.getElementById('result').textContent = `${matches} matches found`;
   });
}