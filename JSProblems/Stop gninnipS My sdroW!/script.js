let result = document.querySelector('#result');

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}

function spinWords(str){
    return str.replace(/\w{5,}/g, (match) => match.split('').reverse().join(''));
}

console.log(spinWords("This is another test"));

result.innerHTML = 1;