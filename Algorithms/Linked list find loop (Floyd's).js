function loop_size(node){
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