let result = document.querySelector('#result');

function dblLinear(n) {
    let queue = [1];
    let length = 0;
    let seen = {};
    let last = 0;

    while (length < n) {
        let x = queue.shift();
        delete seen[x];
        let y = 2*x+1;
        let z = 3*x+1;
        if (!seen[y]) {
            seen[y] = true;
            for (var i = last; i < queue.length; i++) {
                if (queue[i] > y) break;
            }
            queue.splice(i, 0, y);
            last = i;
        }
        seen[z] = true;
        queue.push(z);
        last--;
        length++;
    }

    return queue[0];
}

class TreeNode {
    value; left; right;
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

console.log(new TreeNode(1));


console.log(dblLinear(10));

result.innerHTML = 1;