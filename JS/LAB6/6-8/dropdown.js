function addItem() {
    const textInput = document.getElementById('newItemText').value.trim();
    const valueInput = document.getElementById('newItemValue').value.trim();
    if (!textInput || !valueInput) {
        return;
    }
    const newOption = document.createElement('option');
    newOption.textContent = textInput;
    newOption.value = valueInput;
    document.getElementById('menu').appendChild(newOption);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}