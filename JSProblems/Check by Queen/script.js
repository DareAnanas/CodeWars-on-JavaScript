function getCoordinates(char, array) {
    for (let i = 0; i < array.length; i++) {
        let j = array[i].indexOf(char);
        if (j != -1) {
            return [i, j];
        }
    }
}

function check(board) {
    let [queenY, queenX] = getCoordinates('q', board);
    let [kingY, kingX] = getCoordinates('k', board);
    if (queenY == kingY) return true;
    if (queenX == kingX) return true;
    if (Math.abs(queenX - kingX) == Math.abs(queenY - kingY))
        return true;
    return false;
}

console.log(check([
[ '*', 'q', '*', '*', 'k' ],
[ '*', '*', '*', '*', '*' ], 
[ '*', '*', '*', '*', '*' ], 
[ '*', '*', '*', '*', '*' ], 
[ '*', '*', '*', '*', '*' ]
]));

console.log(check([ 
[ '*', '*', '*', '*', '*' ], 
[ '*', 'k', '*', 'q', '*' ], 
[ '*', '*', '*', '*', '*' ], 
[ '*', '*', '*', '*', '*' ], 
[ '*', '*', '*', '*', '*' ] 
]));

console.log(check([ 
[ 'k', '*', '*', '*', '*' ], 
[ '*', '*', '*', '*', '*' ], 
[ 'q', '*', '*', '*', '*' ], 
[ '*', '*', '*', '*', '*' ], 
[ '*', '*', '*', '*', '*' ] 
]));

console.log(check([ 
[ '*', '*', '*', '*', 'q' ], 
[ '*', '*', '*', '*', 'k' ], 
[ '*', '*', '*', '*', '*' ], 
[ '*', '*', '*', '*', '*' ], 
[ '*', '*', '*', '*', '*' ] 
]));

console.log(check([ 
[ '*', 'k', '*', '*', '*' ], 
[ '*', '*', 'q', '*', '*' ], 
[ '*', '*', '*', '*', '*' ], 
[ '*', '*', '*', '*', '*' ], 
[ '*', '*', '*', '*', '*' ] 
]));

console.log(check([ 
[ '*', '*', 'k', '*', '*' ], 
[ '*', 'q', '*', '*', '*' ], 
[ '*', '*', '*', '*', '*' ], 
[ '*', '*', '*', '*', '*' ], 
[ '*', '*', '*', '*', '*' ] 
]));