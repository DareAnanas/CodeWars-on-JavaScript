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

function chooseBestSum(t, k, ls) {
    let combinations = generateCombinations(ls, k);
    let distances = combinations.map(e => e.reduce((acc, val) => acc + val, 0));
    distances.sort((a, b) => b - a);
    for (let e of distances) {
        if (e <= t) return e;
    }
    return null;
}


console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]));

console.log(chooseBestSum(163, 3, [50]));

ts = [91, 74, 73, 85, 73, 81, 87];
console.log(chooseBestSum(230, 3, ts));
