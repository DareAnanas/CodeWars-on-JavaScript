console.log(isInteresting(1232, [1337, 256]));

function isInteresting(n, awesomePhrases) {
    if (criteriaCheck(n, awesomePhrases)) return 2;
    if (criteriaCheck(n + 1, awesomePhrases)) return 1;
    if (criteriaCheck(n + 2, awesomePhrases)) return 1;
    return 0;
}

function criteriaCheck(n, awesomePhrases) {
    n = n.toString();
    if (n.length < 3) return false;
    if (n.slice(1).split('').every(e => e == 0)) return true;
    if (n.split('').every(e => e == n[0])) return true;
    let inc = true;
    for (let i = 0, j = +n[0]; i < n.length; i++, j++) {
        if (j == 10) { 
            if (n[i] != 0) inc = false; 
            break; 
        }
        if (n[i] != j) { inc = false; break; }
    }
    if (inc) return true;
    let dec = true;
    for (let i = 0, j = +n[0]; i < n.length; i++, j--) {
        if (n[i] != j) { dec = false; break; }
    }
    if (dec) return true;
}