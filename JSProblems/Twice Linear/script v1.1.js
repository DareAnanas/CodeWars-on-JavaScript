let result = document.querySelector('#result');

function dblLinear(n) {
    let prev = 0;
    heap = [1];
    while (true) {
        if (heap[0] == prev) {
            heap[0] = heap.pop();
        } else {
            if (n-- == 0) return heap[0];
            prev = heap[0];
            heap.push(3 * prev + 1);
            heap[0] = 2 * prev + 1;
        }
    }
}

console.log();

result.innerHTML = 1;