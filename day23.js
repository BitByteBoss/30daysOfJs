// Task 1: Median of Two Sorted Arrays
function findMedianSortedArrays(nums1, nums2) {
  let merged = nums1.concat(nums2).sort((a, b) => a - b);
  let len = merged.length;
  if (len % 2 === 0) {
      return (merged[len / 2 - 1] + merged[len / 2]) / 2;
  } else {
      return merged[Math.floor(len / 2)];
  }
}

// Test Case
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5

// Task 2: Merge k Sorted Lists
class ListNode {
  constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
  }
}

function mergeKLists(lists) {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
      let mergedList = [];
      for (let i = 0; i < lists.length; i += 2) {
          let l1 = lists[i];
          let l2 = i + 1 < lists.length ? lists[i + 1] : null;
          mergedList.push(mergeTwoLists(l1, l2));
      }
      lists = mergedList;
  }
  return lists[0];
}

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(-1);
  let current = dummy;

  while (l1 && l2) {
      if (l1.val < l2.val) {
          current.next = l1;
          l1 = l1.next;
      } else {
          current.next = l2;
          l2 = l2.next;
      }
      current = current.next;
  }

  current.next = l1 || l2;
  return dummy.next;
}

// Test Case
let list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let list3 = new ListNode(2, new ListNode(6));
console.log(mergeKLists([list1, list2, list3]));

// Task 3: Trapping Rain Water
function trap(height) {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  let water = 0;

  while (left < right) {
      if (height[left] < height[right]) {
          height[left] >= leftMax ? (leftMax = height[left]) : (water += leftMax - height[left]);
          left++;
      } else {
          height[right] >= rightMax ? (rightMax = height[right]) : (water += rightMax - height[right]);
          right--;
      }
  }

  return water;
}

// Test Case
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6

// Task 4: N-Queens
function solveNQueens(n) {
  const result = [];
  solve(0, []);
  return result;

  function solve(row, state) {
      if (row === n) {
          result.push(state.map(col => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1)));
          return;
      }

      for (let col = 0; col < n; col++) {
          if (isValid(state, row, col)) {
              solve(row + 1, [...state, col]);
          }
      }
  }

  function isValid(state, row, col) {
      for (let r = 0; r < row; r++) {
          const c = state[r];
          if (c === col || c - r === col - row || c + r === col + row) return false;
      }
      return true;
  }
}

// Test Case
console.log(solveNQueens(4)); // Output: [....Q..., ..Q...., Q.......]

// Task 5: Word Ladder
function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]];

  while (queue.length > 0) {
      const [word, length] = queue.shift();

      if (word === endWord) return length;

      for (let i = 0; i < word.length; i++) {
          for (let c = 97; c <= 122; c++) {
              const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
              if (wordSet.has(newWord)) {
                  queue.push([newWord, length + 1]);
                  wordSet.delete(newWord);
              }
          }
      }
  }
  return 0;
}

// Test Case
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // Output: 5
