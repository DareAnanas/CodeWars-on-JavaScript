let result = document.querySelector('#result');

function add(a, b) {
    if (a.length >= b.length) {
        const diff = a.length - b.length;
        a = a.split('');
        b = b.split('');
        let leading_one = false;
        for (let i = a.length - 1; i >= 0; i--) {
            const e1 = a[i];
            const e2 = b[i - diff];
            
        }
        console.log(a, b);
    } else {
        a = a.split('');
        b = b.split('');
        console.log(a, b);
    }
    return (BigInt(a) + BigInt(b)).toString(); // Fix me!
}

console.log(add('90938498237058927340892374089', '63829983432984289347293874'));

result.innerHTML = 1;