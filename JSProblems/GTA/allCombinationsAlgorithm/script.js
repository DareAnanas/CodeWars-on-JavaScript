function generateAllCombinations(elements) {

    function combinations(inputCombination, recursionLevel) {
        if (recursionLevel == elements.length)
            return [inputCombination];
    
        let leftCombinations = combinations([...inputCombination], recursionLevel + 1);
        let rightCombinations = combinations([...inputCombination, elements[recursionLevel]], recursionLevel + 1);
        return [...leftCombinations, ...rightCombinations];
    }

    return combinations([], 0);
}

function combinations(elements) {
    if (elements.length == 0) return [[]];
    let firstElement = elements[0];
    let rest = elements.slice(1);

    let combinationsWithoutFirst = combinations(rest);
    let combinationsWithFirst = [];

    combinationsWithoutFirst.forEach(combination => {
        let combinationWithFirst = [...combination, firstElement];
        combinationsWithFirst.push(combinationWithFirst);
    })

    return [...combinationsWithoutFirst, ...combinationsWithFirst];
}

let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

console.time('My combination algorithm');
generateAllCombinations(elements);
console.timeEnd('My combination algorithm');

console.time('Some indian guy combination algorithm');
combinations(elements);
console.timeEnd('Some indian guy combination algorithm');