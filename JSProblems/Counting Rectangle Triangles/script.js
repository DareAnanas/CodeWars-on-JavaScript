function generateCombinations(arr, n) {
    let result = [];
  
    function combine(currentCombination, start) {
        if (currentCombination.length == n) {
            result.push([...currentCombination]);
            return;
        }
    
        for (let i = start; i < arr.length; i++) {
            currentCombination.push(arr[i]);
            combine(currentCombination, i + 1);
            currentCombination.pop();
        }
    }
  
    combine([], 0);
    return result;
}

function checkRectTriang(arr) {
    if ((arr[2][0] - arr[0][0]) / (arr[1][0] - arr[0][0]) == 
        (arr[2][1] - arr[0][1]) / (arr[1][1] - arr[0][1]))
        return false;
    if ((arr[1][0] - arr[0][0]) * (arr[2][0] - arr[1][0]) +
        (arr[1][1] - arr[0][1]) * (arr[2][1] - arr[1][1]) == 0)
        return true;
    if ((arr[1][0] - arr[0][0]) * (arr[2][0] - arr[0][0]) +
        (arr[1][1] - arr[0][1]) * (arr[2][1] - arr[0][1]) == 0)
        return true;
    if ((arr[2][0] - arr[1][0]) * (arr[2][0] - arr[0][0]) +
        (arr[2][1] - arr[1][1]) * (arr[2][1] - arr[0][1]) == 0)
        return true;
    return false;
}

function isInArray(arr, element) {
    if (arr.length == 0) return false;
    for (let e of arr) {
        if (e[0] == element[0] && e[1] == element[1])
            return true;
    }
    return false;
}

function unique(arr) {
    let result = [];
    for (let e of arr) {
        if (!isInArray(result, e)) {
            result.push(e);
        }
    }
    return result;
}

function countRectTriang(points) {
    points = unique(points);
    let possibleTriangles = generateCombinations(points, 3);    
    let count = 0;
    for (let e of possibleTriangles) {
        if (checkRectTriang(e))
            count++;
    }
    return count;
}

console.log(countRectTriang([[1, 2],[3, 3],[4, 1]]));
console.log(countRectTriang([[1, 2],[3, 3],[4, -1],[4, 1],[1, 1]]));
console.log(countRectTriang([[1, 2],[4, -1],[3, 3],[4, -1],[4, 1],[1, 1],[4, -1], [4, -1], [3, 3], [1, 2]]));