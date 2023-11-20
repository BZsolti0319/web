let displayArray = Array(9).fill(null);
        let availableNumbers = Array.from({ length: 9 }, (_, i) => i + 1);

        function initialBoard() {
            renderBoard();
        }

        function setDisplayBoard(index) {
            if (displayArray[index] === null && availableNumbers.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableNumbers.length);
                displayArray[index] = availableNumbers.splice(randomIndex, 1)[0];
                renderBoard();
            }
        }

        function renderBoard() {
            const matrixElement = document.getElementById("matrix");
            matrixElement.innerHTML = "";

            for (let i = 0; i < 9; i++) {
                const cell = document.createElement("div");
                cell.classList.add("matrix-cell");
                if (displayArray[i] !== null) {
                    cell.textContent = displayArray[i];
                }
                cell.onclick = function () { setDisplayBoard(i); };
                matrixElement.appendChild(cell);
            }
        }

        function resetMatrix() {
            displayArray = Array(9).fill(null);
            availableNumbers = Array.from({ length: 9 }, (_, i) => i + 1);
            renderBoard();
        }

        initialBoard();