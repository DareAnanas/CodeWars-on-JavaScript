function breadthFirstTaversal(root, result) {
    let queue = [root];
    while (queue.length) {
        let e = queue.shift();
        result.push(e.value);
        if (e.left != null) queue.push(e.left);
        if (e.right != null) queue.push(e.right);
    }
}