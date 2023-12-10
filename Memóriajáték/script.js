const cards = [
    "A", "B", "C", "D", "E", "F", "G", "H", "A", "B", "C", "D", "E", "F", "G", "H"
  ];
  
  let flippedCards = [];
  let matchedPairs = 0;
  let isBoardLocked = false;
  
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  function createCardElement(card, index) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.dataset.index = index;
  
    const cardFace = document.createElement("div");
    cardFace.classList.add("card-face");
    cardFace.textContent = card;
  
    cardElement.appendChild(cardFace);
  
    cardElement.addEventListener("click", handleCardClick);
  
    return cardElement;
  }
  
  function renderGameBoard() {
    const gameContainer = document.getElementById("game-container");
    gameContainer.innerHTML = "";
  
    const shuffledCards = shuffle(cards);
  
    shuffledCards.forEach((card, index) => {
      const cardElement = createCardElement(card, index);
      gameContainer.appendChild(cardElement);
    });
  }
  
  function handleCardClick() {
    if (isBoardLocked) return;
  
    const selectedCard = this;
    const index = selectedCard.dataset.index;
  
    if (flippedCards.length < 2 && !flippedCards.includes(index)) {
      flipCard(selectedCard);
      flippedCards.push(index);
  
      if (flippedCards.length === 2) {
        isBoardLocked = true;
        setTimeout(checkMatch, 1000);
      }
    }
  }
  
  function flipCard(cardElement) {
    cardElement.classList.toggle("flipped");
  }
  
  function checkMatch() {
    const [index1, index2] = flippedCards;
    const card1 = document.querySelector(`.card[data-index="${index1}"]`);
    const card2 = document.querySelector(`.card[data-index="${index2}"]`);
  
    if (cards[index1] === cards[index2]) {
      matchedPairs++;
  
      if (matchedPairs === cards.length / 2) {
        confettiEffect();
        showNotification("Gratulálok!");
      }
  
      card1.style.visibility = "hidden";
      card2.style.visibility = "hidden";
    } else {
      flipCard(card1);
      flipCard(card2);
    }
  
    flippedCards = [];
    isBoardLocked = false;
  }
  
  function confettiEffect() {
    const confettiContainer = document.getElementById("confetti-container");
  
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.background = getRandomColor();
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
  
      confettiContainer.appendChild(confetti);
    }
  }
  
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function showNotification(message) {
    const notificationContainer = document.getElementById("notification-container");
    notificationContainer.innerHTML = `<div class="notification">${message}</div>`;
    
    if (message === "Gratulálok!") {
      const restartButton = document.createElement("button");
      restartButton.textContent = "Játék újrakezdése";
      restartButton.onclick = restartGame;
      notificationContainer.appendChild(restartButton);
    }
  
    notificationContainer.style.display = "block";
  }
  
  function restartGame() {
    flippedCards = [];
    matchedPairs = 0;
    isBoardLocked = false;
  
    const notificationContainer = document.getElementById("notification-container");
    notificationContainer.style.display = "none";
  
    location.reload();
  }
  
  document.addEventListener("DOMContentLoaded", renderGameBoard);
  