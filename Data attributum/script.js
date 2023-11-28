var cellColors = ['', '', '', ''];
var currentColor = 'red';

function changeColor(element) {
    var index = element.dataset.index;
    if (cellColors[index] === '') {
        element.classList.add(currentColor);
        cellColors[index] = currentColor;
        currentColor = (currentColor === 'red') ? 'blue' : 'red';
    }
}

function renderMatrix() {
    var content = '';
    content += '<div class="row">';
    for (var i = 0; i < 2; i++) {
        content += `<div class="cell" onclick="changeColor(this)" data-index="${i}"></div>`;
    }
    content += '</div>';
    content += '<div class="row">';
    for (var i = 2; i < 4; i++) {
        content += `<div class="cell" onclick="changeColor(this)" data-index="${i}"></div>`;
    }
    content += '</div>';

    document.getElementById('matrix-container').innerHTML = content;
}

renderMatrix();