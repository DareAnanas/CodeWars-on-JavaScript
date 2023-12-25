let result = document.querySelector('#result');

class TreeNode {
    value; left; right;
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function breadthFirstTaversal(root, n, result) {
    let queue = [root];
    while (true) {
        let e = queue.splice(0, 1)[0];
        result.push(e.value);
        if (result.length >= n) break;
        e.left = new TreeNode(e.value*2+1);
        e.right = new TreeNode(e.value*3+1);
        if (e.left != null) queue.push(e.left);
        if (e.right != null) queue.push(e.right);
        if (queue.length == 0) break;
    }
}

function dblLinear(n) {
    let root = new TreeNode(1);
    let result = [];
    breadthFirstTaversal(root, n, result);
    return result.sort((a, b) => a - b);
    return result.sort((a, b) => a - b).pop();
}

console.log(dblLinear(22));

result.innerHTML = 1;