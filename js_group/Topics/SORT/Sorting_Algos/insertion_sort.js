// ---------------------- INSERTION SORT ------------------------------
const arr = [1, 5, 4, 2, 3];

function sortByInsertionSort(arr) {
  // console.log(" I am in Insertion Sort")
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i]
    let j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  };

  return arr;
}



console.log(sortByInsertionSort(arr));
console.log(sortByInsertionSort([0, -1, 2, -5, 3, -1000]));
console.log(sortByInsertionSort([1, -1]));
console.log(sortByInsertionSort(['a', 'c', 'b']));
console.log(sortByInsertionSort([10n, 1n]));
console.log(sortByInsertionSort([true, false, true]));
console.log(sortByInsertionSort(["ab", "ba", "aab", ""]));
console.log(sortByInsertionSort(["ab", "ab", "ba", "b"]));
// console.log(sortByInsertionSort([undefined, null]));

// -------------
// TC: - ~ O(n^2) -> generally use for smaller dataset/array
// SC: - O(1)

//  to optimize it -> use flag before inner loop -> if any swap -> no swap in inner loop just break outer loop