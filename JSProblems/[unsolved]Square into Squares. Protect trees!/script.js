class Sequence {
    array = [];
    state = false;
    escape = Infinity;
    rest = null;

    isIncreasing() {
        for (let i = 0; i < this.array.length - 1; i++) {
            if (this.array[i] <= this.array[i+1]) {
                return false;
            }
        }
        return true;
    }

    isSquare(n) {
       return Math.sqrt(n) == Math.floor(Math.sqrt(n))
    }

    getLessSquare(n) {
        return Math.floor(Math.sqrt(n)) ** 2;
    }
    
}

function createLoop(NoR, rest, sequence) {
    for (let e = sequence.getLessSquare(rest); e > 0; e++) {
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
        sequence.array = sequence.array.slice(0, NoR);
        sequence.array.push(e);
        createLoop(NoR + 1, rest - e, sequence);
    }
}

function* squareGenerator(n) {
    let num = n-1;
    while (num > 0) {
      yield num**2;
      num--;
    }
}

function decompose(n) {
    let sequence = new Sequence();
    for (let e of squareGenerator(n)) {
        if (sequence.state) break;
        sequence.escape = Infinity;
        sequence.array = [];
        sequence.array.push(e);
        let rest = n**2 - e;
        createLoop(1, rest, sequence);
    }
    if (sequence.state == false)
        return null;
    return sequence.array.map(e => Math.sqrt(e)).reverse();
}

console.log(decompose(2));