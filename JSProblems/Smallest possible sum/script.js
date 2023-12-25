let result = document.querySelector('#result');

function allEquals(nums) {
    return nums.every((val) => {val == nums[0]});
}

function solution(nums) {

    if (allEquals([3,3,3,3,3])) {
        console.log('All equals');
    }

    // while (!allEquals(nums)) {
    //     for (let i = 0; i < nums.length; i++) {
    //         let a = nums[i];
    //         if (i + 1 == nums.length) {
    //             var b = nums[0];
    //         } else {
    //             var b = nums[i+1];
    //         }
    //         if (a > b) {
    //             if (!(a - b <= 0)) nums[i] = a - b;
    //         }
    //     }
    // }
    
    
    return nums;
}


console.log(solution([6, 9, 12]));

result.innerHTML = 1;