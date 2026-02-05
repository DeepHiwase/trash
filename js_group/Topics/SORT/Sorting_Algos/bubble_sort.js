// ----------------- BUBBLE SORT ----------------------------
const arr = [1, 5, 4, 2, 3];

function sortByBubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}



console.log(sortByBubbleSort(arr));
console.log(sortByBubbleSort([0, -1, 2, -5, 3, -1000]));
console.log(sortByBubbleSort([1, -1]));
console.log(sortByBubbleSort(['a', 'c', 'b']));
console.log(sortByBubbleSort([10n, 1n]));
console.log(sortByBubbleSort([true, false, true]));
console.log(sortByBubbleSort(["ab", "ba", "aab", ""]));
console.log(sortByBubbleSort(["ab", "ab", "ba", "b"]));
// console.log(sortByBubbleSort([undefined, null]));

// -------------
// TC: - ~ O(n^2) -> generally use for smaller dataset/array
// SC: - O(1)

//  to optimize it -> use flag before inner loop -> if any swap -> no swap in inner loop just break outer loop