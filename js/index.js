// DOM
const domCards = document.getElementById("domCards");

const icons = [
    {
        name: 'apple-alt',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'ice-cream',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'fish',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'lemon',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'hamburger',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'pizza-slice',
        family: 'fas',
        prefix: 'fa-',
        category: "food"
    },
    {
        name: 'beer',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'glass-whiskey',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'wine-bottle',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'cocktail',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'coffee',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'glass-martini',
        family: 'fas',
        prefix: 'fa-',
        category: "beverage"
    },
    {
        name: 'dragon',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'kiwi-bird',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'frog',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'hippo',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'otter',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
    {
        name: 'horse',
        family: 'fas',
        prefix: 'fa-',
        category: "animal"
    },
];

const color = {
    food: "green",
    animal: "red",
    beverage: "orange"
}

icons.forEach((icon) => {
    const { name, family, prefix, category } = icon;
    const domCard = document.createElement("div");
    domCard.classList.add("card");
    const domInnerCard = document.createElement("div");
    domInnerCard.classList.add("innercard");
    const domIcon = document.createElement("i");
    domIcon.classList.add(family);
    domIcon.classList.add(`${prefix}${name}`);
    domIcon.style.color = color[category];
    const domName = document.createElement("div");
    domName.classList.add("name");
    domName.innerHTML = name;

    domInnerCard.appendChild(domIcon);
    domInnerCard.appendChild(domName);
    domCard.appendChild(domInnerCard);
    domCards.appendChild(domCard);
});