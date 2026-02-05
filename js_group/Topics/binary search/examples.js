// //square root

// function findSquareRoot(term) {
//   let low = 0;
//   let high = term;
//   console.log({ term });

//   while (low < high) {
//     let middle = Math.floor(low + (high - low) / 2);
//     let middleSquared = middle * middle;
//     if (middleSquared == term) {
//       return middle;
//     }
//     if (middleSquared > term) {
//       high = middle - 1;
//     } else {
//       low = middle + 1;
//     }
//   }

//   return -1;
// }

// let result = findSquareRoot(31);
// if (result === -1) {
//   console.log("Sqaure root doesnt exist");
// } else {
//   console.log(result);
// }
// console.log(findSquareRoot(81));
// console.log(findSquareRoot(25));
// console.log(findSquareRoot(31));

// // first occurence find of an element in an array
// // lower bound = index of the first element which is >= x
// // if x doesnt exist in that case lower bound = length of the array

// // x = 4 // x represents the number whose lower bound is to be found

// // [1,2,4,4,4,7,9]

// // // lowerBound = 2

// // x = 7 // x represents the number whose lower bound is to be found

// // [1,2,4,4,4,7,9]

// // x = 7 // x represents the number whose lower bound is to be found

// // [1,2,4,4,4,6,8,10]

// // // lower bound = 6

// // x = 10 // x represents the number whose lower bound is to be found

// // [1,2,4,4,4,7,9]

// // x = 4 // x represents the number whose lower bound is to be found

// // [1,2,5,7,9]

// // // lowerBound = 2

// // x = 9

// // [1,3,7,8,10,12]

// // lowerBound = 4

// // upper bound = first element which is greater than x

// // 1.
// // x = 4 // x represents the number whose lower bound is to be found

// // [1,2,4,4,4,7,9]

// // upperBound = 5

// // 2.
// // x = 5
// // [1,3,3,5,5,6]

// // element = 6
// // upperBound = 5;

// // 3.

// // x = 10

// // [1,2,3]
// // since x doesnt exist upper bound is length of the array
// // upperBound = 3

// // Q find the first occurence of a duplicate element in an Array

// // lowerBound

// // Q find the last occurence of a element in an Array

// // upperBound

// // Q find how many times does an item appear in Array
// //  or how occurences of an element are there in an array

// // [1, 4, 4, 4, 5, 6]

// // x = 4

// // lb = 1
// // ub = 4

// // ub - lb = 3

// function lowerBound(items, x) {
//   console.log("calling lower bound");
//   console.log({ array: items, x });

//   let left = 0;
//   let right = items.length - 1;

//   while (left < right) {
//     let middle = Math.floor(left + (right - left) / 2);
//     console.log({ left, right, middle, middleVal: arr[middle] });

//     if (arr[middle] < x) {
//       console.log(arr[middle] + " is less than " + x);

//       left = middle + 1;
//     } else {
//       console.log(arr[middle] + " is greater than or equal to " + x);

//       right = middle;
//     }
//   }

//   return left;
// }

// let arr = [1, 2, 4, 4, 4, 7, 9];
// console.log("===== the lower bound is ====", lowerBound(arr, 4));
// // console.log(lowerBound(arr, 3))
// // console.log(lowerBound(arr, 6))

// // calculate upper bound
// // function upperBound(items, x) {
// //   let start = 0;
// //   let end = items.length - 1;
// //   let ans = -1;

// //   while (start < end) {
// //     let mid = Math.floor(start + (end - start) / 2);

// //     if (items[mid] == x) {
// //       ans = mid;
// //       start = mid + 1;
// //     } else if (x > items[mid]) {
// //       start = mid + 1;
// //     } else {
// //       end = mid - 1;
// //     }
// //   }
// //   return ans;
// // }

// // console.log(
// //   "===== the upper bound is ====",
// //   upperBound([1, 2, 4, 4, 4, 7, 9], 4)
// // );

// // find how many duplicates elements are there in an array -
// // how many times does x appear in the given array

// // function findDuplicates(arr, x) {
// //   let total = upperBound(arr, x) - lowerBound(arr, x);
// //   return total;
// // }

// // console.log(
// //   "===== the total target ele is ====",
// //   upperBound([1, 2, 4, 4, 4, 7, 9], 4)
// // );



