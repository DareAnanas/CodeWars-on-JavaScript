function digitsSquare(num) {
    let result = 0;
    for (e of num.toString()) {
        result += e*e;
    }
    return result;
}

function hasDuplicates(array) {
    return (new Set(array)).size != array.length;
}

function squareDigitsSequence(a0) {
    let sequence = [a0];
    while (true) {
        let e = sequence.at(-1);
        sequence.push(digitsSquare(e));
        if (hasDuplicates(sequence))
            return sequence.length;
    }
}
console.log(squareDigitsSequence(16));
