 let result = document.querySelector('#result');

let str = "abcd";

function accum(str) {
    let new_str = '';
	for (let i = 0; i < str.length; i++) {
        const e = str[i];
        if (i == 0) new_str = e.toUpperCase();
        else {
            new_str += '-';
            new_str = new_str + e.toUpperCase() + e.toLowerCase().repeat(i);
        }
    }
    return new_str;
}

result.innerHTML = accum(str);