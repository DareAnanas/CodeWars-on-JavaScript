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