const DEAD = 0;
const LIFE = 1;

const NORTH = 0;
const NORTH_EAST = 1;
const EAST = 2;
const SOUTH_EAST = 3;
const SOUTH = 4;
const SOUTH_WEST = 5;
const WEST = 6;
const NORTH_WEST = 7;

const FOUR_DIRECTIONS_OREDER = [
    NORTH,
    EAST,
    SOUTH,
    WEST
]

const EIGHT_DIRECTIONS_ORDER = [
    NORTH,
    NORTH_EAST,
    EAST,
    SOUTH_EAST,
    SOUTH,
    SOUTH_WEST,
    WEST,
    NORTH_WEST
]

function getGeneration(cells, generations) {
    let lifeGrid = new LifeGrid(copyMatrix(cells));

    for (let i = 0; i < generations; i++) {
        lifeGrid.wrapWithDeadCells();
        lifeGrid.calculateNextStates();
        lifeGrid.nextGen();
    }

    lifeGrid.cropDeadCells();
    return lifeGrid.cells;
}

class LifeGrid {
    cells;
    nextStates;
    currentCellX;
    currentCellY;
    currentCellState;
    numberOfLiveNeighbours;

    constructor(cells) {
        this.cells = cells;
    }

    wrapWithDeadCells() {
        for (let direction of FOUR_DIRECTIONS_OREDER) {
            if (this.checkSideForLiveCells(direction)) {
                this.addDeadCellToSide(direction);
            }
        }
    }

    checkSideForLiveCells(direction) {
        let isLive = false;
        switch (direction) {
            case NORTH:
                for (let x = 0; x < this.getAxisLength('x'); x++) {
                    if (this.getCellStateByCoordinates(x, 0) == LIFE) {
                        isLive = true;
                        break;
                    }
                }
                break;
            case EAST:
                for (let y = 0; y < this.getAxisLength('y'); y++) {
                    if (this.getCellStateByCoordinates(this.getAxisLength('x') - 1, y) == LIFE) {
                        isLive = true;
                        break;
                    }
                }
                break;
            case SOUTH:
                for (let x = 0; x < this.getAxisLength('x'); x++) {
                    if (this.getCellStateByCoordinates(x, this.getAxisLength('y') - 1) == LIFE) {
                        isLive = true;
                        break;
                    }
                }
                break;
            case WEST:
                for (let y = 0; y < this.getAxisLength('y'); y++) {
                    if (this.getCellStateByCoordinates(0, y) == LIFE) {
                        isLive = true;
                        break;
                    }
                }
                break;
            default:
                break;
        }
        return isLive;
    }

    addDeadCellToSide(direction) {
        let deadCells = [];
        switch (direction) {
            case NORTH:
                deadCells = Array(this.getAxisLength('x')).fill(0);
                this.cells.unshift(deadCells);
                break;
            case EAST:
                for (let y = 0; y < this.getAxisLength('y'); y++) {
                    this.cells[y].push(0);
                }
                break;
            case SOUTH:
                deadCells = Array(this.getAxisLength('x')).fill(0);
                this.cells.push(deadCells);
                break;
            case WEST:
                for (let y = 0; y < this.getAxisLength('y'); y++) {
                    this.cells[y].unshift(0);
                }
                break;
            default:
                break;
        }
    }

    calculateNextStates() {
        this.nextStates = copyMatrix(this.cells);
        for (let y = 0; y < this.getAxisLength('y'); y++) {
            for (let x = 0; x < this.getAxisLength('x'); x++) {
                this.currentCellX = x;
                this.currentCellY = y;
                this.currentCellState = this.getCellStateByCoordinates(x, y);
                this.numberOfLiveNeighbours = this.getNumberOfLiveNeighbours();
                if (this.underPopulation())
                    this.setNextState(x, y, DEAD);
                else if (this.overcrowding())
                    this.setNextState(x, y, DEAD);
                else if (this.reproduction())
                    this.setNextState(x, y, LIFE);
                else 
                    this.setNextState(x, y, this.currentCellState);
            }
        }
    }

    getNumberOfLiveNeighbours() {
        let count = 0;
        for (let direction of EIGHT_DIRECTIONS_ORDER) {
            if (this.getNeighbourState(direction) == LIFE) {
                count++;
            }
        }
        return count;
    }

    getNeighbourState(direction) {
        let modifier = new DirectionModifier(direction);
        return this.getCellStateByCoordinates(
            this.currentCellX + modifier.x, 
            this.currentCellY + modifier.y
        );
    }

    underPopulation() {
        if (this.isLifeCell() && this.numberOfLiveNeighbours < 2)
            return true;
        return false;
    }

    overcrowding() {
        if (this.isLifeCell() && this.numberOfLiveNeighbours > 3)
            return true;
        return false;
    }

    reproduction() {
        if (this.isDeadCell() && this.numberOfLiveNeighbours == 3)
            return true;
        return false;
    }

    isLifeCell() {
        if (this.currentCellState == LIFE) {
            return true;
        }
        return false;
    }

    isDeadCell() {
        if (this.currentCellState == DEAD) {
            return true;
        }
        return false;
    }

    setNextState(x, y, state) {
        this.nextStates[y][x] = state;
    }

    getAxisLength(axis) {
        if (axis == 'x')
            return this.cells[0].length;
        if (axis == 'y')
            return this.cells.length;
    }

    getCellStateByCoordinates(x, y) {
        if (this.cells[y] == undefined || this.cells[y][x] == undefined)
            return DEAD;
        return this.cells[y][x];
    }

    nextGen() {
        this.cells = copyMatrix(this.nextStates);
    }

    cropDeadCells() {
        for (let direction of FOUR_DIRECTIONS_OREDER) {
            while (this.checkSideForAllDeadCells(direction)) {
                this.cropSideFromDeadCells(direction);
            }
        } 
    }

    checkSideForAllDeadCells(direction) {
        return !this.checkSideForLiveCells(direction);
    }

    cropSideFromDeadCells(direction) {
        switch (direction) {
            case NORTH:
                this.cells.shift();
                break;
            case EAST:
                for (let y = 0; y < this.getAxisLength('y'); y++) {
                    this.cells[y].pop();
                }
                break;
            case SOUTH:
                this.cells.pop();
                break;
            case WEST:
                for (let y = 0; y < this.getAxisLength('y'); y++) {
                    this.cells[y].shift();
                }
                break;
            default:
                break;
        }
    }
 
}

function copyMatrix(matrix) {
    let result = [];
    for (let y = 0; y < matrix.length; y++) {
        result.push([...matrix[y]]);
    }
    return result;
}

class DirectionModifier {
    x;
    y;

    constructor(direction) {
        switch (direction) {
            case NORTH:
                this.setModifier(0, -1);
                break;
            case NORTH_EAST:
                this.setModifier(1, -1);
                break;
            case EAST:
                this.setModifier(1, 0);
                break;
            case SOUTH_EAST:
                this.setModifier(1, 1);
                break;
            case SOUTH:
                this.setModifier(0, 1);
                break;
            case SOUTH_WEST:
                this.setModifier(-1, 1);
                break;
            case WEST:
                this.setModifier(-1, 0);
                break;
            case NORTH_WEST:
                this.setModifier(-1, -1);
                break; 
            default:
                this.setModifier(0 ,0);
                break;
        }
    }

    setModifier(x, y) {
        this.x = x;
        this.y = y;
    }
}

let blinker = [
    [ 0, 1, 0 ], 
    [ 0, 1, 0 ], 
    [ 0, 1, 0 ] 
];

let glider = [
    [1,0,0,0,0,0,0],
    [0,1,1,0,0,0,0],
    [1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]

let pulsar = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

// getGeneration(blinker);
// getGeneration(glider);
// getGeneration(pulsar);

console.log(getGeneration(blinker));
console.log(getGeneration(glider));
console.log(getGeneration(pulsar));

