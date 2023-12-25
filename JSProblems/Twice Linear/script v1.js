let result = document.querySelector('#result');

function dblLinear1(n) {
    let result = [];
    let NoR_limit = Math.ceil(Math.log2(n)) + 1;
    
    function createBranches(n, NoR) {
        if (NoR > NoR_limit) return;
        result.push(n);
        createBranches(2*n+1, NoR+1);
        createBranches(3*n+1, NoR+1);
    }
    createBranches(1, 1);
    
    result.sort((a, b) => a - b);
    result = new Set(result);
    
    return Array.from(result);
}

function dblLinear2(n) {
    let arrOfResult = [1];
    const set = new Set();
    set.add(1);
    let nextInvoker = 0;

    while (arrOfResult.length <= n) {
        let y = 2 * arrOfResult[nextInvoker] + 1;
        let z = 3 * arrOfResult[nextInvoker] + 1;

        set.add(y);
        set.add(z);

        arrOfResult = Array.from(set).sort((a, b) => a - b);

        nextInvoker++;
    }

    arrOfResult.forEach(e => {
        let y = 2 * e + 1;
        let z = 3 * e + 1;

        set.add(y);
        set.add(z);
    });

    const result = Array.from(set).sort((a, b) => a - b);

    return result;
}

function dblLinear3(n) {
    let result = [];

    function createBranches2(a) {
        if (result.length >= n / 2) return;
        result.push(a);
        createBranches2(2*a+1);
    }

    function createBranches3(a) {
        if (result.length >= n) return;
        result.push(a);
        createBranches3(3*a+1);
    }

    createBranches2(1);
    createBranches3(1);
    
    result.sort((a, b) => a - b);
    result = new Set(result);
    
    return Array.from(result);
}

console.log(dblLinear1(22), dblLinear2(22), dblLinear3(22));

result.innerHTML = 1;