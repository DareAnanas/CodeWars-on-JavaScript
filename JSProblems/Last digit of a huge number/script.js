function lastDigit(arr) {
    if (arr.length == 0) return 1;
    let result = arr.pop();
    for (e of arr.reverse()) {
        result = (result < 4) ? result : result % 4 + 4;
        if (e.toString().length > 3) {
            result = (e % 100) ** result;
        } else {
            result = e ** result;
        }
    }
    return result % 10;
}

console.log(lastDigit([ 2, 2, 101, 2 ]));