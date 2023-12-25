function overturn(arr, from_index, to_index) {
    let traveler = arr.splice(from_index, 1)[0];
    arr.splice(to_index, 0, traveler);
}

function recoverSecret(triplets) {
    letters = new Set();
    for (i of triplets) {
        for (e of i) {
            letters.add(e);
        }
    }
    letters = Array.from(letters);
    let debug = [];
    for (let triplet of triplets) {
        let indexes = [];
        let real_indexes = [];
        letters.forEach((e, i, arr) => {
            let index = triplet.indexOf(e);
            if (index != -1) {indexes.push(index); real_indexes.push(i);}
            if (indexes.length > 1) {
                let diff = indexes.at(-1) - indexes.at(-2);
                if (diff < 0) overturn(arr, real_indexes.at(-1), real_indexes.at(diff-1));
            }
        });
        debug.push([...letters]);
    }
    console.log(debug);
    return letters.join('');
}

console.log(recoverSecret([
    ['t','u','p'],
    ['w','h','i'],
    ['t','s','u'],
    ['a','t','s'],
    ['h','a','p'],
    ['t','i','s'],
    ['w','h','s']
  ]
))