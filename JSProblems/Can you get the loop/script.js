let result = document.querySelector('#result');

function loop_size(node){
    // let visited_nodes = [];
    // let current_node = node;
    // while (!visited_nodes.includes(current_node)) {
    //     visited_nodes.push(current_node);
    //     current_node = current_node.getNext();
    // }
    // let loop_begin_node_idx = visited_nodes.indexOf(current_node);
    // visited_nodes = visited_nodes.slice(loop_begin_node_idx);
    // return visited_nodes.length;
    let head = node;
    let slow = head;
    let fast = head;
    do {
        slow = slow.next;
        fast = fast.next.next;
    } while (slow != fast);
    slow = head;
    do {
        slow = slow.next;
        fast = fast.next;
    } while (slow != fast);
    let i = 0;
    let counter = slow;
    do {
        counter.next;
        i++;
    } while (counter != slow);
    return i;
}

result.innerHTML = 1;