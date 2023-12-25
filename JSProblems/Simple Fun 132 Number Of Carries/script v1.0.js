function numberOfCarries(a, b) {
    a = a.toString();
    b = b.toString();
    let carrySum = 0;
    let isCarry = false;
    let length = Math.min(a.length, b.length);
    for (let step = 1; step <= length; step++) {
        if (a.at(-step)*1 + b.at(-step)*1 + isCarry*1 >= 10) {
            carrySum++;
            isCarry = true;
        } else {
            isCarry = false;
        }
    }
    if (isCarry) {
        if (a.length < b.length) {
            length = b.length - a.length;
            for (let i = length-1; i >= 0; i--) {
                if (b[i] == 9) {
                    carrySum++;
                } else {
                    break;
                }
            }
        } else {
            length = a.length - b.length;
            for (let i = length-1; i >= 0; i--) {
                if (a[i] == 9) {
                    carrySum++;
                } else {
                    break;
                }
            }
        }
    }
    return carrySum;
}

console.log(numberOfCarries(0, 0)); // 0
console.log(numberOfCarries(1, 1)); // 0
console.log(numberOfCarries(5, 5)); // 1
console.log(numberOfCarries(9, 9)); // 1
console.log(numberOfCarries(55, 45)); // 2
console.log(numberOfCarries(1927,6426)); // 2
console.log(numberOfCarries(9999, 1)); // 2
console.log(numberOfCarries(543,3456)); // 0
console.log(numberOfCarries(1234,5678)); // 2
console.log(numberOfCarries(1498046, 34010));