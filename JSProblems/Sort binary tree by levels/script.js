function test() {
    let treeOne =
    new Node(2,
        new Node(8,
            new Node(1),
            new Node(3)
        ),
        new Node(9,
            new Node(4),
            new Node(5)
        )
    );
    
    console.log(breadthFirstTaversal(treeOne));

}

class Node { 
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left  = left;
        this.right = right;
    }
}

function breadthFirstTaversal(root) {
    let result = [];
    let queue = [root];
    while (queue.length) {
        let e = queue.shift();
        result.push(e.value);
        if (e.left != null) queue.push(e.left);
        if (e.right != null) queue.push(e.right);
    }
    return result;
}

test();

