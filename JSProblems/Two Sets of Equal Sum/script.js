function generateCombinations(arr, n) {
    let result = [];
  
    function combine(currentCombination, start) {
        if (currentCombination.length == n) {
            let comboSum = currentCombination.reduce((acc, value) => {return acc + value},0);
            let diff = arr.filter(x => !currentCombination.includes(x));
            let diffSum = diff.reduce((acc, value) => {return acc + value},0);
            if (comboSum == diffSum) {
                result = [[...currentCombination], diff];
            }
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
    let result = [];
    for (let i = 1; i <= comboCount; i++) {
        result = generateCombinations(nums, nums.length-i);
        if (result.length != 0) break;
    }
    return result;
}

console.log(createTwoSetsOfEqualSum(1));
console.log(createTwoSetsOfEqualSum(2));
console.log(createTwoSetsOfEqualSum(3));
console.log(createTwoSetsOfEqualSum(4));
console.log(createTwoSetsOfEqualSum(5));
console.log(createTwoSetsOfEqualSum(6));
console.log(createTwoSetsOfEqualSum(7));
console.log(createTwoSetsOfEqualSum(8));
console.log(createTwoSetsOfEqualSum(9));
console.log(createTwoSetsOfEqualSum(10));