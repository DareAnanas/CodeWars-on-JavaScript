function quicksum(packet){
    let sum = 0;
    for (let i = 0; i < packet.length; i++) {
        let code = packet.charCodeAt(i) - 64;
        if (code >= 1 && code <= 26) {
            sum += (i + 1) * code;
        } else if (code != -32) {
            return 0;
        }
    }
    return sum;
}

console.log(quicksum("ACM"));
console.log(quicksum("MID CENTRAL"));