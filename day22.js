// Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Task 1: Add Two Numbers
function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let p = l1, q = l2, curr = dummyHead;
  let carry = 0;

  while (p !== null || q !== null) {
      let x = (p !== null) ? p.val : 0;
      let y = (q !== null) ? q.val : 0;
      let sum = carry + x + y;
      carry = Math.floor(sum / 10);
      curr.next = new ListNode(sum % 10);
      curr = curr.next;

      if (p !== null) p = p.next;
      if (q !== null) q = q.next;
  }

  if (carry > 0) {
      curr.next = new ListNode(carry);
  }

  return dummyHead.next;
}

// Task 2: Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
  let n = s.length;
  let set = new Set();
  let ans = 0, i = 0, j = 0;

  while (i < n && j < n) {
      if (!set.has(s.charAt(j))) {
          set.add(s.charAt(j++));
          ans = Math.max(ans, j - i);
      } else {
          set.delete(s.charAt(i++));
      }
  }

  return ans;
}

// Task 3: Container With Most Water
function maxArea(height) {
  let left = 0, right = height.length - 1;
  let max = 0;

  while (left < right) {
      let h = Math.min(height[left], height[right]);
      let area = h * (right - left);
      max = Math.max(max, area);

      if (height[left] < height[right]) {
          left++;
      } else {
          right--;
      }
  }

  return max;
}

// Task 4: 3Sum
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let left = i + 1, right = nums.length - 1;

      while (left < right) {
          let sum = nums[i] + nums[left] + nums[right];
          if (sum === 0) {
              result.push([nums[i], nums[left], nums[right]]);
              while (left < right && nums[left] === nums[left + 1]) left++;
              while (left < right && nums[right] === nums[right - 1]) right--;
              left++;
              right--;
          } else if (sum < 0) {
              left++;
          } else {
              right--;
          }
      }
  }

  return result;
}

// Task 5: Group Anagrams
function groupAnagrams(strs) {
  let map = new Map();

  for (let str of strs) {
      let sortedStr = str.split('').sort().join('');
      if (!map.has(sortedStr)) {
          map.set(sortedStr, []);
      }
      map.get(sortedStr).push(str);
  }

  return Array.from(map.values());
}

// Example usage:
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(l1, l2)); // Output: [7, 0, 8]

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
