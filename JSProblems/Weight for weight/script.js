let result = document.querySelector('#result');

function orderWeight(str) {
    if (str == '') return '';

    let nums = str.match(/\d+/g);

    function compare(a, b) {
        function sumDigits(n) {
            let sum = 0;
            for (e of n) sum += parseInt(e);
            return sum;
        }
    
        let n1 = sumDigits(a);
        let n2 = sumDigits(b);

        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
        return a.localeCompare(b);
    }
    
    nums.sort(compare);
    return nums.join(' '); 
}

function test() {
    let array = ['b', 'a', 'c'];
    array.sort((a, b) => a.localeCompare(b));
    console.log(array);
}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));

result.innerHTML = 1;