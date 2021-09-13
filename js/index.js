// DOM
const domCards = document.getElementById("domCards");
const domCategory = document.getElementById("category");

// Original Icons
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

// Colors
const colors = {
    food: "green",
    animal: "red",
    beverage: "orange"
}

// Colored Icons
const colorIcons = icons.map((icon) => {
    const { category } = icon;
    return {
        ...icon,
        color: colors[category]
    }
});

// Categories
const categoryIcons = [];
colorIcons.forEach((icon) => {
    if (!categoryIcons.includes(icon["category"])) categoryIcons.push(icon["category"]);
});

// Display categories
categoryIcons.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.innerHTML = category;
    domCategory.appendChild(option);
});

// Display Icons
const displayIcons = (icons, domCards) => {
    domCards.innerHTML = "";
    icons.forEach((icon) => {
        const { name, family, prefix, color } = icon;
        const domCard = document.createElement("div");
        domCard.classList.add("card");
        const domInnerCard = document.createElement("div");
        domInnerCard.classList.add("innercard");
        const domIcon = document.createElement("i");
        domIcon.classList.add(family);
        domIcon.classList.add(`${prefix}${name}`);
        domIcon.style.color = color;
        const domName = document.createElement("div");
        domName.classList.add("name");
        domName.innerHTML = name;

        domInnerCard.appendChild(domIcon);
        domInnerCard.appendChild(domName);
        domCard.appendChild(domInnerCard);
        domCards.appendChild(domCard);
    });
}

// Display Icons
displayIcons(colorIcons, domCards);

domCategory.addEventListener("change", () => {
    const categoryIcons = colorIcons.filter((icon) => {
        if (domCategory.value === "all" || icon["category"] === domCategory.value) return true;
        return false;
    });
    displayIcons(categoryIcons, domCards);
});

// Debug Logs
// console.log(icons);
// console.log(colorIcons);
// console.log(categoryIcons);