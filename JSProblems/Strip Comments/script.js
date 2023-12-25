function solution(input, markers) {
    markers = markers.map(e => ' \\' + e);
    markers = markers.join('|');
    let regexp = new RegExp(`(${markers})[ \\w]+`, 'g');
    return input.replace(regexp, '');
}

let result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
console.log(result);
