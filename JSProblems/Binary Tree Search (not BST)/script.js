let result = document.querySelector('#result');

class Node {
    value; left; right;
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function createTree(n) {
    let root = new Node(1);
    let queue = [root];
    let length = 1;
    while (queue.length) {
        let e = queue.shift();
        length++;
        if (length >= n) break;
        e.left = new Node(e.value*2+1);
        e.right = new Node(e.value*3+1);
        if (e.left != null) queue.push(e.left);
        if (e.right != null) queue.push(e.right);
    }
    return root;
}

let root = createTree(10);

function search(root, n) {
    if (root == null) return false;
    let stack = [root];
    while (stack.length) {
        let e = stack.pop();
        if (e.value == n) return true;
        if (e.right != null) stack.push(e.right);
        if (e.left != null) stack.push(e.left);
    }
    return false;
}

console.log(search(root, 28));

result.innerHTML = 1;