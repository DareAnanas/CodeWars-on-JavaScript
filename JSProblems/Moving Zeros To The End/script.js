let result = document.querySelector('#result');

function moveZeros(arr) {
    let nonZerosArray = [];
    let zerosCount = 0;
    for (e of arr) {
        if (e !== 0) nonZerosArray.push(e);
        else zerosCount += 1;
    }
    return nonZerosArray.concat(Array(zerosCount).fill(0));
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));

result.innerHTML = 1;