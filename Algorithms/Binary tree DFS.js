function depthFirstSearch(root, result) {
    let stack = [root];
    while (stack.length) {
        let e = stack.pop();
        result.push(e.value);
        if (e.right != null) stack.push(e.right);
        if (e.left != null) stack.push(e.left);
    }
}