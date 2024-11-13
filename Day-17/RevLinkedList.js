//? Reverse the linked list

function revLinkedList() {
  let curr = this.head;
  let prev = null;
  let next = node;

  while (arr !== null) {
    next_node = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next_node;
  }
  this.node = prev;
}
console.log(revLinkedList());
