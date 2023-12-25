let result = document.querySelector('#result');

const LEAF = 1;
const CORRECT = 2;
const INCORRECT = 3;

class Node {
    constructor(value, left = null, right = null, type = null, index = null) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.type = type;
        this.index = index;
    }
}

function createTree(tree) {
    let index = 0;
    let root = new Node(tree[index]);
    let queue = [root];
    while (queue.length) {
        let e = queue.shift();
        if (tree[index + 1] == undefined || tree[index + 2] == undefined) break;
        e.left = new Node(tree[++index]);
        e.right = new Node(tree[++index]);
        if (e.left != null) queue.push(e.left);
        if (e.right != null) queue.push(e.right);
    }
    return root;
}

function markNodeTypes(root) {
    let queue = [root];
    let index = 0;
    while (queue.length) {
        let e = queue.shift();
        e.index = index++;
        if (e.left == null && e.right == null) {e.type = LEAF; continue;}
        if (e.value == e.right.value + e.left.value) e.type = CORRECT;
        else e.type = INCORRECT;
        queue.push(e.left);
        queue.push(e.right);
    }
}

function findNodeToChange(root) {
    let queue = [root];
    while (queue.length) {
        let e = queue.shift();
        if (e.type == INCORRECT && e.right.type == CORRECT && e.left.type == CORRECT) {
            return [e.index, e.right.value + e.left.value];
        }
        if (e.type == INCORRECT && e.left.type == INCORRECT && e.right.type == CORRECT) {
            return [e.left.index, e.left.left.value + e.left.right.value];
        }
        if (e.type == INCORRECT && e.left.type == CORRECT && e.right.type == INCORRECT) {
            return [e.right.index, e.right.left.value + e.right.right.value];
        }
        if (e.type == INCORRECT && e.left.type == LEAF && e.right.type == LEAF) {
            return [e.right.index, e.value - e.left.value];
        }
        if (e.left != null) queue.push(e.left);
        if (e.right != null) queue.push(e.right);
    }
}

function findIncorrectValue(tree) {
    let root = createTree(tree);
    markNodeTypes(root);
    return findNodeToChange(root);
}

console.log(findIncorrectValue([29, 13, 16, 5, 8, 9, 1]));

result.innerHTML = 1;