function uniqueInOrder(iterable) {
    if (iterable.length == 0) {
        return [];
    }
    let memory = [];
    for (let i = 1; i < iterable.length; i++) {
        if (iterable[i-1] != iterable[i]) {
            memory.push(iterable[i-1]);
        }
    }
    memory.push(iterable.at(-1));
    return memory;
}