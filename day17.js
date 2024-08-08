// // Activity 1: Linked List

// Task 1: Implement Node class
class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

// Task 2: Implement LinkedList class
class LinkedList {
  constructor() {
      this.head = null;
  }

  add(value) {
      const newNode = new Node(value);
      if (this.head === null) {
          this.head = newNode;
      } else {
          let current = this.head;
          while (current.next !== null) {
              current = current.next;
          }
          current.next = newNode;
      }
  }

  remove() {
      if (this.head === null) {
          return null;
      }
      if (this.head.next === null) {
          this.head = null;
          return;
      }
      let current = this.head;
      while (current.next.next !== null) {
          current = current.next;
      }
      current.next = null;
  }

  display() {
      let current = this.head;
      let nodes = [];
      while (current !== null) {
          nodes.push(current.value);
          current = current.next;
      }
      console.log(nodes.join(" -> "));
  }
}

// Activity 2: Stack

// Task 3: Implement Stack class
class Stack {
  constructor() {
      this.items = [];
  }

  push(element) {
      this.items.push(element);
  }

  pop() {
      if (this.items.length === 0) {
          return null;
      }
      return this.items.pop();
  }

  peek() {
      if (this.items.length === 0) {
          return null;
      }
      return this.items[this.items.length - 1];
  }
}

// Task 4: Reverse a string using Stack
function reverseString(str) {
  let stack = new Stack();
  for (let char of str) {
      stack.push(char);
  }
  let reversedStr = '';
  while (stack.peek() !== null) {
      reversedStr += stack.pop();
  }
  return reversedStr;
}

// Activity 3: Queue

// Task 5: Implement Queue class
class Queue {
  constructor() {
      this.items = [];
  }

  enqueue(element) {
      this.items.push(element);
  }

  dequeue() {
      if (this.items.length === 0) {
          return null;
      }
      return this.items.shift();
  }

  front() {
      if (this.items.length === 0) {
          return null;
      }
      return this.items[0];
  }
}

// Task 6: Simulate a printer queue
class PrinterQueue {
  constructor() {
      this.queue = new Queue();
  }

  addPrintJob(job) {
      this.queue.enqueue(job);
      console.log(`Print job "${job}" added to the queue.`);
  }

  processPrintJob() {
      const job = this.queue.dequeue();
      if (job) {
          console.log(`Processing print job: "${job}"`);
      } else {
          console.log("No print jobs in the queue.");
      }
  }
}

// Activity 4: Binary Tree

// Task 7: Implement TreeNode class
class TreeNode {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

// Task 8: Implement BinaryTree class
class BinaryTree {
  constructor() {
      this.root = null;
  }

  insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
          this.root = newNode;
      } else {
          this.insertNode(this.root, newNode);
      }
  }

  insertNode(node, newNode) {
      if (newNode.value < node.value) {
          if (node.left === null) {
              node.left = newNode;
          } else {
              this.insertNode(node.left, newNode);
          }
      } else {
          if (node.right === null) {
              node.right = newNode;
          } else {
              this.insertNode(node.right, newNode);
          }
      }
  }

  inOrder(node = this.root) {
      if (node !== null) {
          this.inOrder(node.left);
          console.log(node.value);
          this.inOrder(node.right);
      }
  }
}

// Example usage:

// LinkedList
let ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.display();  // Output: 1 -> 2 -> 3
ll.remove();
ll.display();  // Output: 1 -> 2

// Stack
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());  // Output: 3
console.log(stack.peek());  // Output: 2

// Reverse String using Stack
console.log(reverseString("hello"));  // Output: "olleh"

// Queue
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());  // Output: 1
console.log(queue.front());  // Output: 2

// Printer Queue
let printerQueue = new PrinterQueue();
printerQueue.addPrintJob("Document1");
printerQueue.addPrintJob("Document2");
printerQueue.processPrintJob();  // Output: Processing print job: "Document1"
printerQueue.processPrintJob();  // Output: Processing print job: "Document2"

// BinaryTree
let bt = new BinaryTree();
bt.insert(3);
bt.insert(1);
bt.insert(4);
bt.insert(2);
bt.inOrder();  // Output: 1, 2, 3, 4 (In-order traversal)
