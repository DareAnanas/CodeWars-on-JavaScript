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

function recoverSecret(triplets) {
    let duplets = [];
    for (e of triplets) duplets.push(e[0] + e[1], e[1] + e[2]);
    duplets = Array.from(new Set(duplets));
    let result = [];
    while (duplets.length > 1) {
        for (let i = 0; i <= duplets.length; i++) {
            let duplet = duplets[i];
            if (duplets.every(e => duplet[0] != e[1])) {
                result.push(duplets.splice(i, 1)[0][0]);
            }
        }
    }
    console.log(result);
}

function overturn(arr, from_index, to_index) {
    let traveler = arr.splice(from_index, 1)[0];
    arr.splice(to_index, 0, traveler);
}