//  ------------------------- SELECTION SORT ----------------------
const arr = [1, 5, 4, 2, 3];

function sortBySelectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let mini = arr[i];
    let miniIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < mini) {
        mini = arr[j];
        miniIndex = j;
      }
    }

    if (arr[i] > mini) {
      [arr[i], arr[miniIndex]] = [arr[miniIndex], arr[i]]
    }
  }

  return arr;
}



console.log(sortBySelectionSort(arr));
console.log(sortBySelectionSort([0, -1, 2, -5, 3, -1000]));
console.log(sortBySelectionSort([1, -1]));
console.log(sortBySelectionSort(['a', 'c', 'b']));
console.log(sortBySelectionSort([10n, 1n]));
console.log(sortBySelectionSort([true, false, true]));
console.log(sortBySelectionSort(["ab", "ba", "aab", ""]));
console.log(sortBySelectionSort(["ab", "ab", "ba", "b"]));
// console.log(sortBySelectionSort([undefined, null]));

// -------------
// TC: - ~ O() -> generally use for smaller dataset/array
// SC: - O()