let result = document.querySelector('#result');

function pigIt(str){
    console.log(str.replaceAll(/(\w+)/g, str => {
        str = [str.slice(1), str.slice(0, 1)].join('');
        return str + 'ay'
    }));
}

pigIt('Hello world !');

result.innerHTML = 1;