let result = document.querySelector('#result');

class TreeNode {
    value; left; right;
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function breadthFirstTaversal(root, result) {
    let queue = [root];
    while (true) {
        let e = queue.splice(0, 1)[0];
        result.push(e.value);
        if (e.left != null) queue.push(e.left);
        if (e.right != null) queue.push(e.right);
        if (queue.length == 0) break;
    }
}

function dblLinear(n) {
    let root = new TreeNode(1, new TreeNode(3, new TreeNode(7), new TreeNode(10)), new TreeNode(4, new TreeNode(9), new TreeNode(13)));
    let result = [];
    breadthFirstTaversal(root, result);
    return result;
} 

console.log(dblLinear(10));

result.innerHTML = 1;