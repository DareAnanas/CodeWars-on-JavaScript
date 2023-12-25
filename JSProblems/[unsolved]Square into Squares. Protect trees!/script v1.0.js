class Sequence {
    array = [];
    state = false;
    escape = Infinity;
    rest = null;
    squares = [];

    constructor(n) {
        for (let i = 1; i < n; i++) {
            this.squares.push(i**2);
        }
        this.squares.reverse();
    }

    isIncreasing() {
        for (let i = 0; i < this.array.length - 1; i++) {
            if (this.array[i] <= this.array[i+1]) {
                return false;
            }
        }
        return true;
    }

    isSquare(n) {
        for (let i of this.squares) {
            if (n == i)
                return true;
        }
        return false
    }

    getLessSquareIndex(n) {
        if (n == 1) return this.squares.length - 1;
        for (let i = 0; i < this.squares.length; i++) {
            let e = this.squares[i];
            if (e < n)
                return i;
        }
    }
    
}

function createLoop(NoR, rest, sequence) {
    for (let i = sequence.getLessSquareIndex(rest); i < sequence.squares.length; i++) {
        if (sequence.escape < NoR) return;
        if (sequence.state) return;
        if (rest == 0) {
            if (sequence.isIncreasing()) {
                sequence.state = true;
                return; 
            }
        }
        if (sequence.isSquare(rest)) {
            sequence.array.push(rest);
            if (sequence.isIncreasing()) {
                sequence.state = true;
                return; 
            } else if (rest == 1) 
                sequence.escape = NoR;
        }
        let e = sequence.squares[i];
        sequence.array = sequence.array.slice(0, NoR);
        sequence.array.push(e);
        createLoop(NoR + 1, rest - e, sequence);
    }
}

function decompose(n) {
    let sequence = new Sequence(n);
    for (let i of sequence.squares) {
        if (sequence.state) break;
        sequence.escape = Infinity;
        sequence.array = [];
        sequence.array.push(i);
        let rest = n**2 - i;
        createLoop(1, rest, sequence);
    }
    if (sequence.state == false)
        return null;
    return sequence.array.map(e => Math.sqrt(e)).reverse();
}

console.log(decompose(100000000000000));