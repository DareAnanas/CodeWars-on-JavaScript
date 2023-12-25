console.log(parseInt('one thousand three hundred thirty-seven'));

function parseInt(string) {
    const dic = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
        thirteen: 13,
        fourteen: 14,
        fifteen: 15,
        sixteen: 16,
        seventeen: 17,
        eighteen: 18,
        nineteen: 19,
        twenty: 20,
        thirty: 30,
        forty: 40,
        fifty: 50,
        sixty: 60,
        seventy: 70,
        eighty: 80,
        ninety: 90,
        hundred: 100,
        thousand: 1000,
        million: 1_000_000
    };
    let numbers = string.match(/[a-z]+\b(?<!\band)/gi).map(e => dic[e]);
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == 1000) {
            let thousands = collapse(numbers.slice(0, i)) * 1000;
            let hundreds = collapse(numbers.slice(i+1, numbers.length)) * 1;
            return thousands + hundreds;
        }
    }
    numbers = collapse(numbers);
    return numbers * 1;
}

function collapse(numbers) {
    while (numbers.length > 1) {
        const n1 = numbers[0];
        const n2 = numbers[1];
        if (n1 < n2) {
            numbers[1] = n1 * n2;
            numbers.shift();
            continue;
        }
        numbers[1] = n1 + n2;
        numbers.shift();
    }
    return numbers;
}