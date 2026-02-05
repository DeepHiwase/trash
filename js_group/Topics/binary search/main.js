console.log("Binary search");


function binarySearch(arr, target){

  let low = 0; 1
  let high = arr.length -1; 
 

  console.log(arr, {searchTerm: target});
  while(low<= high){  
    
    //  let mid = Math.floor((high + low) /2); 
    let mid = Math.floor((low + (high - low) /2)); // avoid out of bounds exception
    console.log({low, high, mid, val: arr[mid]});
    if(arr[mid]== target){  
      return mid;
    }
    if(target < arr[mid]){ 
      high = mid-1;
    }else{
      low = mid +1;
    }
  }

  return -1;


}
// n  is the number of items
// n, n/2, n/4 ,n/8 ... = log n

// time complexity O(log n)

// l = 10 ^9  
// h= 10^9

// mid = low + (high -low ) /2

let input = [ 10, 22, 55, 77, 88, 111];
console.log(binarySearch(input, 88))
console.log(binarySearch(input, 110))