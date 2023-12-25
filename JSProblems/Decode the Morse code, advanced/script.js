let result = document.querySelector('#result');

const MORSE_CODE = {
    '-.-.--': '!',      '.-..-.': '"', '...-..-': '$',
    '.-...': '&',       '.----.': "'", '-.--.': '(',
    '-.--.-': ')',      '.-.-.': '+',  '--..--': ',',
    '-....-': '-',      '.-.-.-': '.', '-..-.': '/',
    '-----': '0',       '.----': '1',  '..---': '2',
    '...--': '3',       '....-': '4',  '.....': '5',
    '-....': '6',       '--...': '7',  '---..': '8',
    '----.': '9',       '---...': ':', '-.-.-.': ';',
    '-...-': '=',       '..--..': '?', '.--.-.': '@',
    '.-': 'A',          '-...': 'B',   '-.-.': 'C',
    '-..': 'D',         '.': 'E',      '..-.': 'F',
    '--.': 'G',         '....': 'H',   '..': 'I',
    '.---': 'J',        '-.-': 'K',    '.-..': 'L',
    '--': 'M',          '-.': 'N',     '---': 'O',
    '.--.': 'P',        '--.-': 'Q',   '.-.': 'R',
    '...': 'S',         '-': 'T',      '..-': 'U',
    '...-': 'V',        '.--': 'W',    '-..-': 'X',
    '-.--': 'Y',        '--..': 'Z',   '..--.-': '_',
    '...---...': 'SOS'
};

function trimZeros(str) {
    if (str[0] == '0') str = str.replace(/0+/, '');
    if (str[str.length - 1] == '0') str = str.replace(/0+$/, '');
    return str;
}

function count(bits, char) {
    let chars = new Set();
    let arr = bits.match(new RegExp(`${char}+`, 'g'));
    if (arr != null) {
        for (e of arr) chars.add(e.length);
    }
    return Array.from(chars);
}

function decodeBits(bits) {
    bits = trimZeros(bits);
    let ones = count(bits, '1');
    let modifier = null;
    if (ones.length == 1) {
        let zeros = count(bits, '0');
        if (zeros.length == 1) {
            modifier = Math.min(ones[0], zeros[0]);
        } else {
            modifier = ones[0];
        }  
    }
    else modifier = Math.max(...ones) / 3;
    return bits.replace(new RegExp(`1{${modifier*3}}`, 'g'), '-')
               .replace(new RegExp(`1{${modifier}}`, 'g'), '.')
               .replace(new RegExp(`0{${modifier*7}}`, 'g'), '   ')
               .replace(new RegExp(`0{${modifier*3}}`, 'g'), ' ')
               .replace(new RegExp(`0{${modifier}}`, 'g'), '')
}

function decodeMorse(morseCode) {
    return morseCode.trim()
                    .split('   ').map(e => e.match(/(\.|-)+/g).map(e => MORSE_CODE[e]).join(''))
                    .join(' ');
}

console.log(decodeBits('1'));

result.innerHTML = 1;