const NORTH = 0;
const EAST = 1;

let matrix = [
    [1,2,3],
    [8,9,0],
    [5,6,7]
];

let direction = NORTH;

try {
    let value = matrix[-1][0];
} catch {
    direction = EAST;
}

console.log(direction == EAST);