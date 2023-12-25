let result = document.querySelector('#result');

Array.prototype.sameStructureAs = function (other) {
    let firstArray = this;
    let secondArray = other;
    
    function createLoop(firstArray, secondArray) {
        if (firstArray.length != secondArray.length) return false;
        for (let i = 0; i < firstArray.length; i++) {
            let e1 = firstArray[i];
            let e2 = secondArray[i];
            if (Array.isArray(e1) != Array.isArray(e2)) return false;
            if (Array.isArray(e1) && Array.isArray(e2)) {
                if (!createLoop(e1, e2)) return false;
            }
        }
        return true;
    }

    return createLoop(firstArray, secondArray);
};

console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] )) 
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ));

result.innerHTML = 1;