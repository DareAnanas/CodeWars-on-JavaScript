let result = document.querySelector('#result');

// function permute(nums) {
    //     let permutations = [];
    //     if (nums.length == 1) {
    //         return [nums];
    //     }
    //     for (let i = 0; i < nums.length; i++) {
    //         let partitioned = [...nums];
    //         partitioned.splice(i, 1);
    //         let arrs = permute(partitioned);
    //         arrs.forEach(arr => permutations.push([nums[i], ...arr]))
    //     }
    //     return permutations;
    // }
    
    // function nextBigger2(num) {
    //     str = num.toString();
    //     str = str.split('')
    //     let permutations = permute(str);
    //     permutations = permutations.filter(e => e[0] != 0)
    //     .map(e => parseInt(e.join('')))
    //     .filter((e, i, array) => array.indexOf(e) == i)
    //     .sort((a,b) => a - b);
    //     let index = permutations.indexOf(num);
    //     return permutations[index + 1];
    // }


String.prototype.replaceAt = function (index, replacement) {
    return this.slice(0, index) + replacement + this.slice(index + 1, this.length);
}

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}

function splitCliff(str) {
    for (let i = str.length-1; i >= 0; i--) {
        if (str[i-1] < str[i]) {
            return [str.slice(0, i), str.slice(i)];
        }
    }
}

function swap([left_side, right_side]) {
    let cliff_breaker = left_side.slice(-1);
    for (let i = right_side.length-1; i >= 0; i--) {
        if (cliff_breaker < right_side[i]) {
            left_side = left_side.replaceAt(left_side.length-1, right_side[i]);
            right_side = right_side.replaceAt(i, cliff_breaker);
            break;
        }
    }
    return [left_side, right_side];
}

function nextBigger(num) {
    let str = num.toString();
    cliff = splitCliff(str);
    if (cliff == undefined) return -1;
    [left_side, right_side] = swap(cliff);
    right_side = right_side.reverse();
    return parseInt(left_side + right_side);
}

console.log(nextBigger(75552));