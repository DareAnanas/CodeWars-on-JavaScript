function countAndGetCatsCoords(yard) {
    let catsCount = 0;
    let catsCoords = [];
    for (let i = 0; i < yard.length; i++) {
        for (let j = 0; j < yard[0].length; j++) {
            if (yard[i][j] != '-') {
                catsCount++;
                catsCoords.push([i, j]);
            }
        }
    }
    return [catsCount, catsCoords];
}

function calculateDistance(cat1, cat2) {
    return Math.sqrt(
    Math.abs(cat1[0] - cat2[0])**2
    +
    Math.abs(cat1[1] - cat2[1])**2
    )
}

function checkDistance(catsCoords, minDistance) {
    if (catsCoords.length == 2) {
        if (calculateDistance(catsCoords[0], catsCoords[1]) < minDistance)
            return false;
    }
    if (catsCoords.length == 3) {
        if (calculateDistance(catsCoords[0], catsCoords[1]) < minDistance ||
            calculateDistance(catsCoords[1], catsCoords[2]) < minDistance ||
            calculateDistance(catsCoords[0], catsCoords[2]) < minDistance
        ) return false;
    }
    return true;
}

function peacefulYard(yard, minDistance) {
    let [catsCount, catsCoords] = countAndGetCatsCoords(yard);
    if (catsCount == 1)
        return true;
    return checkDistance(catsCoords, minDistance);
}

console.log(peacefulYard([
    "------------",
    "------------", 
    "-L----------", 
    "------------", 
    "------------", 
    "------------"
], 10));

console.log(peacefulYard([
    "------------", 
    "---M--------", 
    "------------", 
    "------------", 
    "-------R----", 
    "------------"
], 6));

console.log(peacefulYard([
    "-----------L", 
    "--R---------", 
    "------------", 
    "------------", 
    "------------", 
    "--M---------"
], 4));