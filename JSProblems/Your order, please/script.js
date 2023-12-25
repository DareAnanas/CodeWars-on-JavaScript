let result = document.querySelector('#result');

words = "is2 Thi1s T4est 3a";

function order(words) {
    let array = words.split(' ');
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        const e = array[i];
        new_array[e.match(/[1-9]/) - 1] = e;
    }
    return new_array.join(' ');
}

result.innerHTML = order(words);