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

function createTwoSetsOfEqualSum(n) {
    console.log(n);
    if (n == 1 || n == 2)
        return [];
    let nums = [];
    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }
    let comboCount = Math.floor(nums.length / 2);
    for (let i = 1; i <= comboCount; i++) {
        let combinations = generateCombinations(nums, nums.length-i);
        for (let combination of combinations) {
            let comboSum = combination.reduce((acc, value) => {return acc + value},0);
            let diff = nums.filter(x => !combination.includes(x));
            let diffSum = diff.reduce((acc, value) => {return acc + value},0);
            if (comboSum == diffSum)
                return [combination, diff];
        }
    }
    return [];
}

console.log(createTwoSetsOfEqualSum(3));