console.log(lastDigit('2', '9'));

function lastDigit(a, b) {
    const dic = {
        0: [0],
        1: [1],
        2: [6, 2, 4, 8],
        3: [1, 3, 9, 7],
        4: [6, 4],
        5: [5],
        6: [6],
        7: [1, 7, 9, 3],
        8: [6, 8, 4, 2],
        9: [1, 9]
    }
    a = a[a.length-1];
    if (b.length == 1 && b == 0) return 1;
    if (dic[a].length == 1) return dic[a][0];
    if (dic[a].length == 2) return dic[a][b.slice(-1) % dic[a].length];
    if (dic[a].length == 4) return dic[a][b.slice(-2) % dic[a].length];
}