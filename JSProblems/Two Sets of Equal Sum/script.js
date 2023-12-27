function snakeFill(from, to, a, b) {
    let i = from;
    while (i <= to) {
        a.push(i++);    
        b.push(i++);
        b.push(i++);
        a.push(i++);
    }
    return [a, b];
}
function createTwoSetsOfEqualSum(n) {
    let a = [];
    let b = [];
    if (n % 4 == 0)
        return snakeFill(1, n, a, b);
    if (n % 4 == 3) {
        a.push(1,2);
        b.push(3);
        return snakeFill(4, n, a, b);
    }
    return [];
}

console.log(createTwoSetsOfEqualSum(1));
console.log(createTwoSetsOfEqualSum(2));
console.log(createTwoSetsOfEqualSum(3));
console.log(createTwoSetsOfEqualSum(4));
console.log(createTwoSetsOfEqualSum(5));
console.log(createTwoSetsOfEqualSum(6));
console.log(createTwoSetsOfEqualSum(7));
console.log(createTwoSetsOfEqualSum(8));
console.log(createTwoSetsOfEqualSum(9));
console.log(createTwoSetsOfEqualSum(10));
console.log(createTwoSetsOfEqualSum(11));
console.log(createTwoSetsOfEqualSum(12));
console.log(createTwoSetsOfEqualSum(13));
console.log(createTwoSetsOfEqualSum(14));
console.log(createTwoSetsOfEqualSum(15));
console.log(createTwoSetsOfEqualSum(16));
console.log(createTwoSetsOfEqualSum(17));
console.log(createTwoSetsOfEqualSum(18));
console.log(createTwoSetsOfEqualSum(19));
console.log(createTwoSetsOfEqualSum(20));