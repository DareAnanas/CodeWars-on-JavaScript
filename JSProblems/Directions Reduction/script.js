let result = document.querySelector('#result');

function isPathReducable(path) {
    let dic = {
        "NORTH": "SOUTH",
        "EAST": "WEST"
    }
    for (let i = 0; i < path.length-1; i++) {
        if (dic[path[i]] == path[i+1] ||
            dic[path[i+1]] == path[i]) {
            return i;
        }
    }
    return false;
}

function dirReduc(path){
    while (true) {
        let idx = isPathReducable(path);
        if (idx === false) break;
        path.splice(idx, 2);
    }
    return path;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));

result.innerHTML = 1;