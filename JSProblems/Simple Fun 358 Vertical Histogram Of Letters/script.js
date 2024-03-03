function isUppercase(char) {
    let charCode = char.charCodeAt();
    if (charCode >= 65 && charCode <= 90)
        return true;
    return false;
}

function countLetters(s) {
    let letterCount = {};
    for (let char of s) {
        if (isUppercase(char)) {
            if (letterCount.hasOwnProperty(char)) {
                letterCount[char]++;
            } else {
                letterCount[char] = 1;
            }
        }
    }
    return letterCount;
}

function generateHistogramString(letterCount, base = false) {
    let keys = Object.keys(letterCount).sort();
    if (base) {
        let baseString = '';
        for (let key of keys) {
            baseString += key + ' ';
        }
        baseString = baseString.slice(0, -1);
        return baseString;
    }
    let string = '';
    for (let key of keys) {
        
        let element = letterCount[key];
        if (element != 0) {
            string += '*' + ' ';
            letterCount[key]--;
        } else {
            string += ' ' + ' ';
        }
    }
    string = string.trimEnd();
    return string;
}

function isAllValuesZero(object) {
    for (let value of Object.values(object)) {
        if (value != 0) {
            return false;
        }
    }
    return true;
}

function generateArrayOfStrings(letterCount) {
    let arrayOfStrings = [];

    arrayOfStrings.push(generateHistogramString(letterCount, base=true));

    while (!isAllValuesZero(letterCount)) {
        arrayOfStrings.push(generateHistogramString(letterCount));
    }

    return arrayOfStrings;
}

function generateVerticalHistogram(arrayOfStrings) {
    let verticalHistogram = '';

    for (let i = arrayOfStrings.length-1; i >= 0; i--) {
        verticalHistogram += arrayOfStrings[i] + '\n';
    }

    verticalHistogram = verticalHistogram.slice(0, -1);

    return verticalHistogram;
}

function verticalHistogramOf(s) {
    let letterCount = countLetters(s);
    
    let arrayOfStrings = generateArrayOfStrings(letterCount);

    let verticalHistogram = generateVerticalHistogram(arrayOfStrings);

    return verticalHistogram;
}

let assert = chai.assert;

assert.strictEqual(isUppercase('A'), true);
assert.strictEqual(isUppercase('a'), false);
assert.strictEqual(isUppercase(''), false);
assert.strictEqual(isUppercase(' '), false);
assert.strictEqual(isUppercase('1'), false);

assert.strictEqual({}.hasOwnProperty('A'), false);
assert.strictEqual({'A': 1}.hasOwnProperty('A'), true);

assert.deepEqual(countLetters('XXY YY ZZZ123ZZZ AAA BB C'), 
{
    A: 3,
    B: 2,
    C: 1,
    X: 2,
    Y: 3,
    Z: 6 
})
assert.deepEqual(countLetters('abc123'), {});

let letterCount = countLetters('XXY YY ZZZ123ZZZ AAA BB C');
assert.strictEqual(generateHistogramString(letterCount, base=true), 'A B C X Y Z');
assert.strictEqual(generateHistogramString(letterCount), '* * * * * *');
assert.strictEqual(generateHistogramString(letterCount), '* *   * * *');
assert.strictEqual(generateHistogramString(letterCount), '*       * *');
assert.strictEqual(generateHistogramString(letterCount), '          *');
assert.strictEqual(generateHistogramString(letterCount), '          *');
assert.strictEqual(generateHistogramString(letterCount), '          *');

assert.strictEqual(isAllValuesZero({A:0, B:0}), true);
assert.strictEqual(isAllValuesZero({A:0, B:1}), false);

assert.strictEqual(verticalHistogramOf('XXY YY ZZZ123ZZZ AAA BB C'), 
`          *
          *
          *
*       * *
* *   * * *
* * * * * *
A B C X Y Z`
);

assert.strictEqual(verticalHistogramOf('AAABBC'),
`*
* *
* * *
A B C`
);



