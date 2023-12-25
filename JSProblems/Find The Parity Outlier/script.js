let result = document.querySelector('#result');

function checkParity(n) {
    if (n % 2 == 0) return false;
    return true;
}

function findOutlier(nums){
    let outlierParity;
    if (checkParity(nums[0]) == checkParity(nums[1])) {
        outlierParity = !checkParity(nums[0]);
    } else {
        outlierParity = !checkParity(nums[2]);
    }
    return nums.filter(e => checkParity(e) == outlierParity)[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

result.innerHTML = 1;