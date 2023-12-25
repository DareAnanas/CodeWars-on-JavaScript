let result = document.querySelector('#result');

function arrayDiff(arr1, arr2) {
    return arr1.filter(e => {if (!arr2.includes(e)) return true;})
}

console.log(arrayDiff([1,2,2,2,3],[2]));

result.innerHTML = 1;