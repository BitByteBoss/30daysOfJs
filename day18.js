// Activity 1: Sorting Algorithms

// Task 1: Implement the bubble sort algorithm
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              // Swap arr[j] and arr[j + 1]
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }
  console.log("Bubble Sorted Array:", arr);
  return arr;
}

// Task 2: Implement the selection sort algorithm
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
          if (arr[j] < arr[minIndex]) {
              minIndex = j;
          }
      }
      // Swap arr[i] and arr[minIndex]
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
  }
  console.log("Selection Sorted Array:", arr);
  return arr;
}

// Task 3: Implement the quicksort algorithm
function quickSort(arr) {
  if (arr.length <= 1) {
      return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
          left.push(arr[i]);
      } else {
          right.push(arr[i]);
      }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Activity 2: Searching Algorithms

// Task 4: Implement the linear search algorithm
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
          console.log("Linear Search: Target found at index", i);
          return i;
      }
  }
  console.log("Linear Search: Target not found");
  return -1;
}

// Task 5: Implement the binary search algorithm
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
          console.log("Binary Search: Target found at index", mid);
          return mid;
      } else if (arr[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  console.log("Binary Search: Target not found");
  return -1;
}

// Activity 3: String Algorithms

// Task 6: Write a function to count the occurrences of each character in a string
function countCharacterOccurrences(str) {
  let charCount = {};
  for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log("Character Occurrences:", charCount);
  return charCount;
}

// Task 7: Write a function to find the longest substring without repeating characters
function longestSubstringWithoutRepeatingCharacters(str) {
  let maxLength = 0;
  let currentSubstring = "";
  for (let char of str) {
      let index = currentSubstring.indexOf(char);
      if (index !== -1) {
          currentSubstring = currentSubstring.slice(index + 1);
      }
      currentSubstring += char;
      maxLength = Math.max(maxLength, currentSubstring.length);
  }
  console.log("Longest Substring Length:", maxLength);
  return maxLength;
}

// Activity 4: Array Algorithms

// Task 8: Write a function to rotate an array by k positions
function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n;
  let rotatedArray = arr.slice(-k).concat(arr.slice(0, n - k));
  console.log("Rotated Array:", rotatedArray);
  return rotatedArray;
}

// Task 9: Write a function to merge two sorted arrays into one sorted array
function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          mergedArray.push(arr1[i]);
          i++;
      } else {
          mergedArray.push(arr2[j]);
          j++;
      }
  }
  // Add remaining elements
  while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
  }
  while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
  }
  console.log("Merged Array:", mergedArray);
  return mergedArray;
}

// Test all functions
(function testAll() {
  let arr = [64, 34, 25, 12, 22, 11, 90];
  bubbleSort([...arr]);
  selectionSort([...arr]);
  console.log("Quick Sorted Array:", quickSort([...arr]));

  let target = 22;
  linearSearch(arr, target);
  let sortedArr = quickSort([...arr]);
  binarySearch(sortedArr, target);

  let str = "javascript";
  countCharacterOccurrences(str);
  longestSubstringWithoutRepeatingCharacters(str);

  let k = 2;
  rotateArray(arr, k);

  let arr1 = [1, 3, 5, 7];
  let arr2 = [2, 4, 6, 8];
  mergeSortedArrays(arr1, arr2);
})();
