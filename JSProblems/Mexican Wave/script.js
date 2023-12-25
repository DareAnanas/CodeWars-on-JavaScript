let result = document.querySelector('#result');

str = 'two words';

function wave(str){
    let array = str.split('');
    let result = array.reduce(function (accum, item, index, array) {
        if (array[index] != ' ') {
            let clone = [...array]
            clone[index] != ' '
            clone[index] = clone[index].toUpperCase();
            accum.push(clone.join(''));
        }
        return accum;
    }, [])
    console.log(result);
    return result;
}

result.innerHTML = wave(str);