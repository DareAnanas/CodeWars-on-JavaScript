function permute(strings) {
    let permutations = [];
    if (strings.length == 1) {
        return [strings];
    }
    for (let i = 0; i < strings.length; i++) {
        let partitioned = [...strings];
        partitioned.splice(i, 1);
        let arrs = permute(partitioned);
        arrs.forEach(arr => permutations.push([strings[i], ...arr]))
    }
    return permutations;
}

function sloganMaker(array){
    array = Array.from(new Set(array));
    array = permute(array);
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].join(' ');
    }
    return array;
}

console.log(sloganMaker(["super", "hot", "guacamole"]));