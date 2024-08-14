// Activity 1: Two Sum
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
          return [map.get(complement), i];
      }
      map.set(nums[i], i);
  }
  return [];
}

// Test cases for Two Sum
console.log("Two Sum:");
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]

// Activity 2: Reverse Integer
function reverseInteger(x) {
  const sign = Math.sign(x);
  const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;
  if (reversed < -(2**31) || reversed > 2**31 - 1) {
      return 0; // Handle overflow
  }
  return reversed;
}

// Test cases for Reverse Integer
console.log("\nReverse Integer:");
console.log(reverseInteger(123));    // Output: 321
console.log(reverseInteger(-123));   // Output: -321
console.log(reverseInteger(120));    // Output: 21
console.log(reverseInteger(0));      // Output: 0

// Activity 3: Palindrome Number
function isPalindrome(x) {
  if (x < 0) return false;
  const str = x.toString();
  return str === str.split('').reverse().join('');
}

// Test cases for Palindrome Number
console.log("\nPalindrome Number:");
console.log(isPalindrome(121));    // Output: true
console.log(isPalindrome(-121));   // Output: false
console.log(isPalindrome(10));     // Output: false
console.log(isPalindrome(12321));  // Output: true

// Activity 4: Merge Two Sorted Lists
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;

  while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
          current.next = l1;
          l1 = l1.next;
      } else {
          current.next = l2;
          l2 = l2.next;
      }
      current = current.next;
  }

  current.next = l1 !== null ? l1 : l2;
  return dummy.next;
}

// Helper function to print linked list
function printList(node) {
  let arr = [];
  while (node) {
      arr.push(node.val);
      node = node.next;
  }
  console.log(arr.join('->'));
}

// Test cases for Merge Two Sorted Lists
console.log("\nMerge Two Sorted Lists:");
let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let mergedList = mergeTwoLists(l1, l2);
printList(mergedList); // Output: 1->1->2->3->4->4

// Activity 5: Valid Parentheses
function isValid(s) {
  const stack = [];
  const map = {
      '(': ')',
      '{': '}',
      '[': ']'
  };

  for (let char of s) {
      if (map[char]) {
          stack.push(map[char]);
      } else if (stack.length === 0 || stack.pop() !== char) {
          return false;
      }
  }
  return stack.length === 0;
}

// Test cases for Valid Parentheses
console.log("\nValid Parentheses:");
console.log(isValid("()"));        // Output: true
console.log(isValid("()[]{}"));    // Output: true
console.log(isValid("(]"));        // Output: false
console.log(isValid("([)]"));      // Output: false
console.log(isValid("{[]}"));      // Output: true
