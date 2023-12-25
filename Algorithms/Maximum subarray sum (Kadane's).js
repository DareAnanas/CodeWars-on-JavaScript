function maxSequence(nums) {
    let maxSub = nums[0] ?? 0;
    let curSum = 0;
    for (let n of nums) {
        if (curSum < 0) curSum = 0;
        curSum += n;
        maxSub = Math.max(maxSub, curSum);
    }
    if (maxSub < 0) return 0;
    return maxSub;
}