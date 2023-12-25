let result = document.querySelector('#result');

class RomanNumerals {
    
    static toRoman(num) {
        function shiftDivision(digit, division) {
            const dic = {
                'I': {0: 'I', 1: 'X',2: 'C', 3: 'M'},
                'V': {0: 'V', 1: 'L', 2: 'D'},
                'X': {0: 'X', 1: 'C', 2: 'M'}
            }
            let result = [];
            for (let e of digit) result.push(dic[e][division]);
            return result.join('');
        }
        
        const dic = {
            1: 'I', 2: 'II', 3: 'III',
            4: 'IV', 5: 'V', 6: 'VI',
            7: 'VII', 8: 'VIII', 9: 'IX'
        }
        let str = num.toString();
        let result = []; 
        for (let i = 0; i < str.length; i++) {
            let division = str.length-1 - i;
            let digit = parseInt(str[i]);
            if (digit == 0) continue;
            digit = dic[digit];
            digit = shiftDivision(digit, division);
            result.push(digit);
        }
        return result.join('');
    }
  
    static fromRoman(str) {
        let dic = {
            'I': 1, 'V': 5, 'X': 10, 'L': 50,
            'C': 100, 'D': 500, 'M': 1000
        }
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            let e1 = str[i];
            let e2 = str[i+1];
            if (dic[e1] < dic[e2]) {
                sum += dic[e2] - dic[e1];
                i++; continue;
            }
            sum += dic[e1];
        }
        return sum;
    }
}

console.log(RomanNumerals.toRoman(2008));
console.log(RomanNumerals.fromRoman('IV'));

result.innerHTML = 1;