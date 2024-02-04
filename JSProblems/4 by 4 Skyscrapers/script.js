const GRID_LENGTH = 4;

Array.prototype.deleteElement = function(index) {
    this.splice(index, 1);
}

function test() {
    let normalCluesArray = [
        [
            1, 2, 4, 3,
            3, 2, 1, 2,
            2, 1, 2, 2,
            2, 3, 2, 1
        ],
        [
            0, 0, 1, 2,
            0, 2, 0, 0,
            0, 3, 0, 0,
            0, 1, 0, 0
        ],
        [
            3, 0, 0, 0,
            0, 0, 3, 0,
            2, 0, 2, 0,
            0, 0, 3, 0
        ],
        [
            1, 0, 0, 3,
            0, 3, 0, 0,
            0, 0, 2, 0,
            3, 0, 0, 0
        ],
        [
            0, 0, 2, 0,
            0, 2, 0, 0,
            0, 0, 3, 0,
            1, 0, 0, 3
        ],
        [
            0, 0, 0, 0,
            3, 0, 0, 0,
            0, 0, 2, 3,
            3, 0, 2, 0  
        ],
        [
            2, 2, 0, 0,
            0, 0, 4, 0,
            0, 2, 0, 0,
            0, 0, 0, 0
        ],
        [
            0, 0, 0, 3,
            0, 3, 0, 0,
            0, 3, 0, 2,
            3, 0, 0, 0
        ],
        
        [
            0, 4, 0, 0,
            0, 0, 0, 2,
            0, 2, 0, 0,
            0, 0, 0, 2
        ],
        [
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            3, 0, 1, 4
        ],
        [
            3, 3, 0, 0,
            0, 0, 2, 0,
            0, 2, 0, 0,
            0, 0, 0, 3
        ],
        [
            0, 0, 0, 0,
            0, 4, 2, 0,
            0, 1, 0, 2,
            0, 0, 0, 0
        ],
    ];

    let notSolvedOneSizeCluesArray = [
        [
            0, 2, 2, 0,
            0, 0, 0, 0,
            3, 1, 0, 0,
            0, 0, 0, 3
        ],
        [
            3, 0, 0, 0,
            0, 2, 3, 0,
            0, 2, 0, 0,
            0, 0, 0, 2
        ],
        [
            0, 2, 0, 0,
            0, 2, 0, 0,
            0, 0, 0, 3,
            3, 3, 0, 0
        ],
        [
            2, 0, 2, 0,
            0, 0, 3, 0,
            0, 0, 3, 0,
            0, 0, 2, 2
        ],
        [
            0, 0, 0, 0,
            0, 2, 2, 0,
            0, 0, 0, 0,
            1, 3, 0, 3
        ]
    ]

    function solvePuzzle(clues) {
        
        let cluesManager = new CluesManager(clues);
        let combinations = cluesManager.generateCombinations();
        // console.log(combinations);
        let combinationsManager = new CombinationsManager(combinations);
        do {
            combinationsManager.updateCellVariants();
            combinationsManager.updateCombinations();
        } while (!combinationsManager.isRepeatingCellVariants());
        if (combinationsManager.checkIfPuzzleSolved()) {
            return true;
        }
        combinationsManager.goThroughFinalVariants();

        console.log(combinationsManager.combinations);
        console.log(combinationsManager.cellVariants);
        
    }

    for (let clues of normalCluesArray) {
        console.log(solvePuzzle(clues));
    }
    
}

class CombinationsManager {
    combinations;
    previosCellVariants;
    cellVariants;
    pointer;

    constructor(combinations) {
        this.combinations = combinations;
        this.cellVariants = ArrayUtils.createMatrix(4, 4);
        this.pointer = new Pointer();
    }

    goThroughFinalVariants() {
        for (let variantsSize = 2; variantsSize < 24; variantsSize++) {
            let index = this.findIndexOfArrayWithSize(variantsSize);
            if (index != -1) {
                this.goThroughAllVariants(index);
                break;
            }
        }
    }

    findIndexOfArrayWithSize(size) {
        for (let i = 0; i < this.combinations.cols.length; i++) {
            if (this.combinations.cols[i].length == size) {
                return {axis: 'cols', i: i};
            }
        }
        for (let i = 0; i < this.combinations.rows.length; i++) {
            if (this.combinations.rows[i].length == size) {
                return {axis: 'rows', i: i};
            }
        }
        return -1;
    }

    goThroughAllVariants(index) {
        let combinations = this.copyCombinations();
        console.log('Copied combinations: ' ,combinations);
        console.log('Found: ', this.combinations[index.axis][index.i]);
    }

    copyCombinations() {
        return JSON.parse(JSON.stringify(this.combinations));
    }

    checkIfPuzzleSolved() {
        for (let col of this.combinations.cols) {
            if (col.length != 1) {
                return false;
            }
        }
        for (let row of this.combinations.rows) {
            if (row.length != 1) {
                return false;
            }
        }
        return true;
    }

    updateCombinations() {
        this.pointer.init();
        while (!this.pointer.end) {
            this.updateColCombinations();
            this.updateRowCombinations();
            this.pointer.next();
        }
    }

    updateColCombinations() {
        let currentColVariants = this.combinations.cols[this.pointer.getCol()];
        for (let i = 0; i < currentColVariants.length; i++) {
            let e = currentColVariants[i];
            let currentColPosition = e[this.pointer.getRow()];
            let currentCellVariant = this.cellVariants[this.pointer.y][this.pointer.x];
            if (!currentCellVariant.includes(currentColPosition)) {
                this.combinations.cols[this.pointer.getCol()].deleteElement(i);
                i--;
            }
        }
    }

    updateRowCombinations() {
        let currentRowVariants = this.combinations.rows[this.pointer.getRow()];
        for (let i = 0; i < currentRowVariants.length; i++) {
            let e = currentRowVariants[i];
            let currentRowPosition = e[this.pointer.getCol()];
            let currentCellVariant = this.cellVariants[this.pointer.y][this.pointer.x];
            if (!currentCellVariant.includes(currentRowPosition)) {
                this.combinations.rows[this.pointer.getRow()].deleteElement(i);
                i--;
            }
        }
    }

    isRepeatingCellVariants() {
        if (this.previosCellVariants.toString() == this.cellVariants.toString()) {
            return true;
        }
        return false;
    }

    updateCellVariants() {
        this.previosCellVariants = ArrayUtils.copyMatrix(this.cellVariants);
        this.pointer.init();
        while (!this.pointer.end) {
            let possibleCellVariantByCol = this.getPossibleCellVariantByCol();
            let possibleCellVariantByRow = this.getPossibleCellVariantByRow();
            let intersection = ArrayUtils.intersect(possibleCellVariantByCol, possibleCellVariantByRow);
            intersection.sort();
            this.cellVariants[this.pointer.y][this.pointer.x] = intersection;
            this.pointer.next();
        }
    }

    getPossibleCellVariantByCol() {
        let result = [];
        for (let e of this.combinations.cols[this.pointer.getCol()]) {
            result.push(e[this.pointer.getRow()]);
        }
        result = ArrayUtils.unique(result);
        return result;
    }

    getPossibleCellVariantByRow() {
        let result = [];
        for (let e of this.combinations.rows[this.pointer.getRow()]) {
            result.push(e[this.pointer.getCol()]);
        }
        result = ArrayUtils.unique(result);
        return result;
    }
}

class ArrayUtils {
    static unique(array) {
        return Array.from(new Set(array));
    }

    static intersect(arrA, arrB) {
        return arrA.filter(e => arrB.includes(e));
    }

    static createMatrix(m, n) {
        let result = [];
        for (let i = 0; i < m; i++) {
            result.push(new Array(n));
        }
        return result;
    }

    static copyMatrix(matrix) {
        let result = [];
        for (let y = 0; y < matrix.length; y++) {
            result.push([...matrix[y]]);
        }
        return result;
    }
}

class Pointer {
    x;
    y;
    generator;
    end;

    init() {
        this.generator = this.createGenerator();
        this.end = false;
        this.next();
    }

    *createGenerator() {
        for (let y = 0; y < GRID_LENGTH; y++) {
            for (let x = 0; x < GRID_LENGTH; x++) {
                yield [x, y];
            }
        }
    }

    next() {
        let next = this.generator.next();
        if (next.done) {
            this.end = true;
            return;
        }
        [this.x, this.y] = next.value;
    }

    getRow() {
        return this.y;
    }

    getCol() {
        return this.x;
    }
}

class CluesManager {
    clues;
    combinationsTable;

    constructor(clues) {
        this.clues = clues;
        this.combinationsTable = generateCombinationsTable();
    }

    generateCombinations() {
        let combinations = {
            cols:[], 
            rows:[]
        };

        for (let cluePair of this.iterateColsPairs()) {
            combinations.cols.push(this.getPairCombinations(cluePair))
        }
        for (let cluePair of this.iterateRowsPairs()) {
            combinations.rows.push(this.getPairCombinations(cluePair));
        }

        return combinations;
    }
    //TODO remove magic numbers
    *iterateColsPairs() {
        for (let i = 0; i < GRID_LENGTH; i++) {
            let leftClue = this.clues[i];
            let rightClue = this.clues[11 - i];
            yield [leftClue, rightClue];
        }
    }
    //TODO remove magic numbers
    *iterateRowsPairs() {
        for (let i = 15; i > 11; i--) {
            let leftClue = this.clues[i];
            let rightClue = this.clues[19 - i];
            yield [leftClue, rightClue];
        }
    }

    getPairCombinations(cluePair) {
        let combinations = [];
        let clueComparator = new ClueComparator(cluePair);
        for (let row of this.combinationsTable) {
            row = [...row];
            clueComparator.tableLeftClue = row.shift();
            clueComparator.tableRightClue = row.pop();
            let tableCombination = row;
            if (clueComparator.hasFoundTableCombination()) {
                combinations.push(tableCombination);
            }
        }
        return combinations;
    }
}

class ClueComparator {
    cluePair;
    tableLeftClue;
    tableRightClue;

    constructor(cluePair) {
        this.cluePair = cluePair;
    }

    hasFoundTableCombination() {
        if (this.cluePair[0] == 0 && this.cluePair[1] == 0) {
            return true;
        }
        else if (this.cluePair[0] == 0) {
            return this.tableRightClue == this.cluePair[1];
        }
        else if (this.cluePair[1] == 0) {
            return this.tableLeftClue == this.cluePair[0];
        } else {
            return this.tableLeftClue == this.cluePair[0] && 
            this.tableRightClue == this.cluePair[1];
        }
    }
}

function generateCombinationsTable() {
    let table = [
        [1, 4,1,2,3, 2],
        [1, 4,2,1,3, 2],
        [1, 4,2,3,1, 3],
        [1, 4,1,3,2, 3],
        [1, 4,3,1,2, 3],
        [1, 4,3,2,1, 4],

        [2, 3,2,1,4, 1],
        [2, 3,1,2,4, 1],
        [2, 1,4,2,3, 2],
        [2, 2,4,1,3, 2],
        [2, 3,4,1,2, 2],
        [2, 3,2,4,1, 2],
        [2, 3,1,4,2, 2],
        [2, 2,1,4,3, 2],
        [2, 3,4,2,1, 3],
        [2, 2,4,3,1, 3],
        [2, 1,4,3,2, 3],

        [3, 1,3,2,4, 1],
        [3, 2,3,1,4, 1],
        [3, 2,1,3,4, 1],
        [3, 1,2,4,3, 2],
        [3, 1,3,4,2, 2],
        [3, 2,3,4,1, 2],

        [4, 1,2,3,4, 1]
    ];
    return table;
}






























test();