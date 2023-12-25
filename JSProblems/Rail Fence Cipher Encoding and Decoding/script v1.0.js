console.log(encodeRailFenceCipher('Hello, World!', 3));

function encodeRailFenceCipher(inp_str, n) {
    const step = 2 + 2 * (n - 2);
    let res_str = '';
    let i = 0;
    while(true) {
        if (inp_str[i] == undefined) break;
        res_str += inp_str[i];
        i += step;
    }
    return res_str;
}


function decodeRailFenceCipher(string, numberRails) {
    // code
}