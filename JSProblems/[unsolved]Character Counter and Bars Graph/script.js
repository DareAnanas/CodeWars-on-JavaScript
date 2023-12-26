function countCharsBarGraph(text, barlength) {
    let dic = [];
    for (let e of text) {
        if (e != ' ') {
            e = e.toLowerCase();
            if (dic[e] == undefined) {
                dic[e] = 1;
            }
            dic[e]++;
        }
    }
    let sorted = Object.entries(dic).sort((pairA, pairB) => {
        let value = pairB[1] - pairA[1];
        if (value != 0)
            return value;
        return pairA[0].localeCompare(pairB[0]);
    });
    let maxCharNum = sorted[0][1];
    let result = '';
    for (let e of sorted) {
        let bar = Math.floor(e[1] * barlength / maxCharNum);
        result += `${e[0]}:${'#'.repeat(bar)}\n`;
    }
    return result.slice(0, -1);
}

console.log(countCharsBarGraph("just a short text", 4));

console.log(countCharsBarGraph("just a short text", 23));

console.log(countCharsBarGraph("aaazbbbzzfffffzRRrTTkkjjkkkkTtrr", 100));
