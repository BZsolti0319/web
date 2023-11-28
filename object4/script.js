const heroes = [
    {firstName: "Ahsoka", lastName: "Tano", job: "padawan", image: "ahsoka.jpg"},
    {firstName: "Boba", lastName: "Fett", job: "fejvadász", image: "boba.jpg"},
    {firstName: "Han", lastName: "Solo", job: "csempész", image: "han.jpg"},
    {firstName: "Leia", lastName: "Organa", job: "szenátor", image: "leia.jpg"}
];

function renderHeroes(containerId, heroesArray) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`A ${containerId} id-vel rendelkező konténer nem található.`);
        return;
    }

    container.innerHTML = "";

    heroesArray.forEach(hero => {
        const heroCard = `
            <div class="hero-card">
                <img src="${hero.image}" alt="${hero.firstName} ${hero.lastName}" class="hero-image">
                <h2>${hero.firstName} ${hero.lastName}</h2>
                <p>${hero.job}</p>
            </div>
        `;
        container.insertAdjacentHTML("beforeend", heroCard);
    });
}

const newHeroes = [
    {firstName: "Luke", lastName: "Skywalker", job: "jedi", image: "luke.jpg"},
    {firstName: "Rey", lastName: "Palpatine", job: "jedi", image: "rey.jpg"}
];

heroes.push(...newHeroes);

renderHeroes("heroes-container", heroes);