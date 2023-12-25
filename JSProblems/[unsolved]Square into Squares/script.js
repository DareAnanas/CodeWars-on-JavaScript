function initSquares(n) {
    let squares = [];
    for (let i = n; i > 0; i--) {
        squares.push(i**2);
    }

    function checkIfSquare(square) {
        for (const e of squares) {
            if (square == e) return square;
        }
        return false;
    }

    function getNextSquare(square) {
        for (const e of squares) {
            if (square > e) 
                return e;
        }
    }
    return [checkIfSquare, getNextSquare];
}

function createLoop(squares, n, prev, checkIfSquare, getNextSquare) {
    for (let i = getNextSquare(n); i > 1; i = getNextSquare(i)) {
        if (prev <= i) break;
        if (checkIfSquare(n - i)) break;
        createLoop(squares, n - i, i, checkIfSquare, getNextSquare);
        squares.push(i);
    }
}

function decompose(n) {
    let squares = [];
    const [checkIfSquare, getNextSquare] = initSquares(n);
    createLoop(squares, n**2, Infinity, checkIfSquare, getNextSquare);
    return squares;
    // your code
}

console.log(decompose(12));

