function degreesOfLock(initial, first, second, third) {
    let degrees = 1080;
    const div = 9;
    let n = 0;
    while (initial != first) {
        if (initial == 0) {
            initial = 40;
            continue;
        };
        initial--;
        n++;
    }
    while (first != second) {
        if (first == 40) {
            first = 0;
            continue;
        }
        first++;
        n++;
    }
    while (second != third) {
        if (second == 0) {
            second = 40;
            continue;
        };
        second--;
        n++;
    }
    degrees += n * div
    return degrees;
}

console.log(degreesOfLock(0, 30,  0, 30)); // 1350