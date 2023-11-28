let adatok = [];
function addData() {
    const inputElement = document.getElementById('dataInput');
    const inputValue = inputElement.value.trim();

    if (inputValue !== '') {
        adatok.push(inputValue);
        inputElement.value = '';
        renderData();
    }
}
function renderData() {
    const outputContainer = document.getElementById('output-container');
    outputContainer.innerHTML = '';

    adatok.forEach((data, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <p>${data}</p>
            <button onclick="removeData(${index})">Törlés</button>
        `;
        outputContainer.appendChild(card);
    });
}
function removeData(index) {
    adatok.splice(index, 1);
    renderData();
}