let result = document.querySelector('#result');

const nums = [];

for (let i = 0; i < 10000; i++) {
    nums[i] = Math.round(Math.random() * 100000);  
}

let first = Math.min(...nums);
nums[nums.indexOf(first)] = Infinity;
let second = Math.min(...nums);

first + second;
console.log('first + second', first + second);


 