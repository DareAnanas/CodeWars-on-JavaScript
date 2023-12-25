let result = document.querySelector('#result');

function reverse(str) {
    let arr = str.split('');
    let n = Math.floor(str.length / 2);
    function swap(i) {
        if (i == n) return;
        arr[i] = str.at(-1-i);
        arr[arr.length-1-i] = str.at(i);
        swap(i + 1);
    }
    swap(0);
    console.log(arr.join(''));
}

reverse('akiro');

result.innerHTML = 1;