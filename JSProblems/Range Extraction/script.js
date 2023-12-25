let result = document.querySelector('#result');

function solution(oloi){
    let stack = [];
    let oloi_str = '';
    for (const e of oloi) {
        if (stack.length == 0) {
            stack.push(e);
            continue;
        }
        if ((e - stack.at(-1)) == 1) {
            stack.push(e);
        } 
        else if (stack.length == 1 || stack.length == 2) {
            oloi_str += stack.join(',') + ',';
            stack = [];
            stack.push(e);
        }
        else {
            oloi_str += stack.at(0) + '-' + stack.at(-1) + ',';
            stack = [];
            stack.push(e);
        }
    }
    if (stack.length == 1 || stack.length == 2) {
        oloi_str += stack.join(',');
    }
    else {
        oloi_str += stack.at(0) + '-' + stack.at(-1);
    }
    return oloi_str;
}

function solution2(individualIntegers) {
	return individualIntegers
		.reduce(splitIntoRanges, [])
		.map(convertToRange)
		.join(",");
}

function splitIntoRanges(ranges, number) {
	if (!ranges.length) {
		ranges.push([number]);
		return ranges;
	}

	var lastRange = ranges[ranges.length - 1];
	var lastNumber = lastRange[lastRange.length - 1];

	number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
	return ranges;
}

function convertToRange(range) {
	return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
}

console.log(solution2([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));

result.innerHTML = 1;