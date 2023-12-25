console.log(encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 3));
console.log(decodeRailFenceCipher('WECRLTEERDSOEEFEAOCAIVDEN', 3));

function encodeRailFenceCipher(inp_str, n) {
    let wave = createWave(inp_str.length, n);
    let res_str = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < wave.length; j++) {
            if (wave[j] == i) res_str += inp_str[j];
        }
    }
    return res_str;
}

function decodeRailFenceCipher(inp_str, n) {
    inp_str = inp_str.split('');
    let wave = createWave(inp_str.length, n);
    let res_str = [];
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < wave.length; j++) {
            if (wave[j] == i) res_str[j] = inp_str.shift();
        }
    }
    return res_str.join('');
}

function createWave(length, n) {
    let arr = [];
    let move = 'down';
    for (let i = 0, j = 1; i < length; i++) {
        arr.push(j);
        if (j == n && move == 'down') move = 'up';
        if (j == 1 && move == 'up') move = 'down';
        switch (move) {
            case 'down':
                j++;
                break;
            case 'up':
                j--;
                break;
        }
    }
    return arr;
}