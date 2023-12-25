let result = document.querySelector('#result');

function zeroCheck(n) {
    if (Math.floor(n / 10) == 0) return '0' + n;
    return n;
}

function humanReadable(seconds) {
    let hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return `${zeroCheck(hours)}:${zeroCheck(minutes)}:${zeroCheck(seconds)}`;
}

console.log(humanReadable(90));

result.innerHTML = 1;