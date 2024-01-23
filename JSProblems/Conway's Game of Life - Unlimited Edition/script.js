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

const DEAD = 0;
const LIFE = 1;

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

class Cell {
    x;
    y;
    state;
    nextState;

    constructor(x, y, state) {
        this.x = x;
        this.y = y;
        this.state = state;
    }
}

class LifeGrid {
    cells;
    currentCell;
    numberOfLiveNeighbours;

    constructor(cells) {
        this.cells = cells;
    }

    getCellByCoordinates(x, y) {
        if (this.cells[y] == undefined || this.cells[y][x] == undefined)
            return new Cell(x, y, DEAD);
        return this.cells[y][x];
    }

    getNeighbour(direction) {
        let modifier = new DirectionModifier(direction);
        return this.getCellByCoordinates(
            this.currentCell.x + modifier.x, 
            this.currentCell.y + modifier.y
        );
    }

    getNumberOfLiveNeighbours() {
        let count = 0;
        for (let direction of EIGHT_DIRECTIONS_ORDER) {
            if (this.getNeighbour(direction).state == LIFE) {
                count++;
            }
        }
        return count;
    }

    isLifeCell() {
        if (this.currentCell.state == LIFE) {
            return true;
        }
        return false;
    }

    isDeadCell() {
        if (this.currentCell.state == DEAD) {
            return true;
        }
        return false;
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

    getAxisLength(axis) {
        if (axis == 'x')
            return this.cells[0].length;
        if (axis == 'y')
            return this.cells.length;
    }

    checkSideForLiveCells(direction) {
        let isLive = false;
        switch (direction) {
            case NORTH:
                for (let x = 0; x < this.getAxisLength('x'); x++) {
                    if (this.getCellByCoordinates(x, 0).state == LIFE) {
                        isLive = true;
                        break;
                    }
                }
                break;
            case EAST:
                for (let y = 0; y < this.getAxisLength('y'); y++) {
                    if (this.getCellByCoordinates(this.getAxisLength('x') - 1, y).state == LIFE) {
                        isLive = true;
                        break;
                    }
                }
                break;
            case SOUTH:
                for (let x = 0; x < this.getAxisLength('x'); x++) {
                    if (this.getCellByCoordinates(x, this.getAxisLength('y') - 1).state == LIFE) {
                        isLive = true;
                        break;
                    }
                }
                break;
            case WEST:
                for (let y = 0; y < this.getAxisLength('y'); y++) {
                    if (this.getCellByCoordinates(0, y).state == LIFE) {
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

    wrapWithDeadCells() {

    }

    calculateNextStates() {
        for (let y = 0; y < this.getAxisLength('y'); y++) {
            for (let x = 0; x < this.getAxisLength('x'); x++) {
                this.currentCell = this.getCellByCoordinates(x, y);
                this.numberOfLiveNeighbours = this.getNumberOfLiveNeighbours();
                if (this.underPopulation())
                    this.currentCell.nextState = DEAD;
                else if (this.overcrowding())
                    this.currentCell.nextState = DEAD;
                else if (this.reproduction())
                    this.currentCell.nextState = LIFE;
                else 
                    this.currentCell.nextState = this.currentCell.state;
            }
        }
    }

    nextGen() {
        for (let y = 0; y < this.getAxisLength('y'); y++) {
            for (let x = 0; x < this.getAxisLength('x'); x++) {
                this.currentCell = this.getCellByCoordinates(x, y);
                this.currentCell.state = this.currentCell.nextState;
            }
        }
    }
}

function transformIntoClassCells(cells) {
    for (let y = 0; y < cells.length; y++) {
        for (let x = 0; x < cells[0].length; x++) {
            cells[y][x] = new Cell(x, y, cells[y][x]);
        }
    }
    return cells;
}

function transformFromClassCells(cells) {
    for (let y = 0; y < cells.length; y++) {
        for (let x = 0; x < cells[0].length; x++) {
            cells[y][x] = cells[y][x].state;
        }
    }
    return cells;
}

function nextGen(cells) {
    cells = transformIntoClassCells(cells);

    let lifeGrid = new LifeGrid(cells);

    lifeGrid.addDeadCellToSide(NORTH);
    console.log(lifeGrid.cells);

    lifeGrid.calculateNextStates();
    lifeGrid.nextGen();

    cells = transformFromClassCells(lifeGrid.cells);
    return cells;
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

console.log(nextGen(blinker));
console.log(nextGen(glider));
console.log(nextGen(pulsar));
  