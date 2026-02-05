// --------------------- MERGE SORT --------------------------------

let arr = [5, 1, 3, 2, 4];

function merge(leftPart, rightPart) {
  // return [...leftPart, ...rightPart];
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftPart.length && rightIndex < rightPart.length) {
    if (leftPart[leftIndex] < rightPart[rightIndex]) {
      mergedArray.push(leftPart[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(rightPart[leftIndex]);
      rightIndex++;
    }

    while(leftIndex < leftPart.length ) {
      
    }
  }
}

function sortByMergeSort(arr, s, e) {
  // base case
  if (s == e) {
    return arr[s];
  }

  // mid
  let mid = s + Math.floor((e - s) / 2);

  // leftPart
  let leftPart = sortByMergeSort(arr, s, mid - 1);
  // rightPart
  let rightPart = sortByMergeSort(arr, mid + 1, e);

  merge(leftPart, rightPart);
}

console.log(arr);
sortByMergeSort(arr, 0, arr.length - 1);
console.log(arr);