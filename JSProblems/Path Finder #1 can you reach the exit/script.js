const NORTH = 0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;

const FORWARD = 0;
const LEFT = 1;
const RIGHT = 2;
const BACK = 3;

class Turtle {
    maze;
    startingX;
    startingY;
    x;
    y;
    hasLeftStart = false;
    facing;

    constructor(maze, startingX = 0, startingY = 0, facing = EAST) {
        this.maze = maze;
        this.startingX = startingX;
        this.startingY = startingY;
        this.x = startingX;
        this.y = startingY;
        this.facing = facing;
    }

    #getCellValue() {

    }
    
    isInFinish() {
        if (this.x == this.maze.length - 1 &&
            this.y == this.maze.length - 1)
            return true;
        return false;
    }

    isReturnedToStart() {
        if (this.x == this.startingX &&
            this.y == this.startingY &&
            this.hasLeftStart)
            return true;
        if (this.x == this.startingX &&
            this.y == this.startingY) {
            this.hasLeftStart = true;
            return false;
        }
        return false;
    }

    isFreeWay(direction) {
        switch (direction) {
            case FORWARD:
                
                break;
        
            default:
                break;
        }
    }
}

function pathFinder(maze){
    let turtle = new Turtle(maze, 0, 0);
    if (turtle.isInFinish())
        return true;
    if (turtle.isReturnedToStart())
        return false;

}

let maze1 = `
.W.
.W.
...
`;