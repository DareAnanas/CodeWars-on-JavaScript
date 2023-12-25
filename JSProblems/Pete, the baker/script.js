let result = document.querySelector('#result');

function cakes(recipe, ingredients) {
    for (e of Object.keys(recipe)) {
        if (!Object.keys(ingredients).includes(e)) return 0;
    }
    let quantities = [];
    for (e of Object.keys(recipe)) {
        if (recipe[e] > ingredients[e]) return 0;
        quantities.push(Math.floor(ingredients[e] / recipe[e]));
    }
    return Math.min(...quantities);
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));
result.innerHTML = 1;