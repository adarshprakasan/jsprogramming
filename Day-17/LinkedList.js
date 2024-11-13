class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertElementFromHead(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.size++;
    } else {
      node.next = this.head;
      this.head = node;
      this.size++;
    }
  }

  removeFromHead() {
    if (this.head == null) {
      console.log("No values");
    } else {
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      this.size--;
    }
  }

  printLL() {
    if (this.head == null) {
      console.log("No values");
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        console.log(curr.data);
        curr = curr.next;
      }
      console.log(curr.data);
    }
  }

  revLinkedList() {
    let curr = this.head;
    let prev = null;
    let next_node;

    while (curr !== null) {
      next_node = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next_node;
    }
    this.node = prev;
  }
}

let ll1 = new LinkedList();
ll1.insertElementFromHead(10);
ll1.insertElementFromHead(20);
ll1.insertElementFromHead(30);
ll1.insertElementFromHead(60);

ll1.revLinkedList();
ll1.printLL();
console.log(ll1.size);
