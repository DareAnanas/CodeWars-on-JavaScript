let result = document.querySelector('#result');

function permutations(string) {
	return Array.from(new Set(permute(string.split('')).map(e => e.join(''))));
}

console.log(permutations('aabb'));

function permute(chars) {
    let permutations = [];
    if (chars.length == 1) {
        return [chars];
    }
    for (let i = 0; i < chars.length; i++) {
        let partitioned = [...chars];
        partitioned.splice(i, 1);
        let arrs = permute(partitioned);
        arrs.forEach(arr => permutations.push([chars[i], ...arr]))
    }
    return permutations;
}

result.innerHTML = 1;