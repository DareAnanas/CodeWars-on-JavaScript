console.log(recoverSecret([
    [ 'g', 'a', 's' ],
    [ 'o', 'g', 's' ],
    [ 'c', 'n', 't' ],
    [ 'c', 'o', 'n' ],
    [ 'a', 't', 's' ],
    [ 'g', 'r', 't' ],
    [ 'r', 't', 's' ],
    [ 'c', 'r', 'a' ],
    [ 'g', 'a', 't' ],
    [ 'n', 'g', 's' ],
    [ 'o', 'a', 's' ]
  ]
))

function recoverSecret(triplets) {
    let duplets = [];
    for (e of triplets) duplets.push(e[0] + e[1], e[1] + e[2]);
    duplets = Array.from(new Set(duplets));
    let result = [];
    while (duplets.length > 1) {
        for (let i = 0; i < duplets.length; i++) {
            const target_duplet = duplets[i];
            if (!duplets.every(duplet => target_duplet[0] != duplet[1])) continue;
            result.push(target_duplet[0]);
            const contract_length = duplets.length;
            duplets = duplets.filter(e => e[0] != target_duplet[0]);
            i += contract_length - duplets.length;
        }
    }
    result.push(...duplets[0].split(''));
    return result.join('');
}