console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to\
mind, there lived not long since one of those gentlemen that keep a lance\
in the lance-rack, an old buckler, a lean hack, and a greyhound for\
coursing. An olla of rather more beef than mutton, a salad on most\
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra\
on Sundays, made away with three-quarters of his income."));

function topThreeWords(text) {
    let occurrances = {};
    let words = text.match(/[a-z']+/gmi);
    if (words == undefined) return [];
    words = words.filter(e => e.match(/[a-z]+/gmi) != undefined);
    for (e of words) {
        e = e.toLowerCase();
        if (occurrances[e] == undefined) {
            occurrances[e] = 1; continue;
        }
        occurrances[e]++;
    }
    return Object.entries(occurrances).sort((a, b) => b[1] - a[1]).slice(0, 3).map(e => e[0]);
}