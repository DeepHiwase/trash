
function linearSearch(arr, target){
  console.log(arr)
  console.log("the length of the array is ", arr.length)
  for(let index = 0; index< arr.length; index++){
    if(target === arr[index]){
      return index;
    }

  }
  return -1;
}

console.log(linearSearch([23,31,1,2,10,8,6], 10));


// find all occurences of an element in an array

let input = [1,2,2,5,7,8,2, 10]

function findOccurences(arr, target){
  let result = [];
  console.log(arr)
  console.log("the length of the array is ", arr.length)
  for(let index = 0; index< arr.length; index++){
    if(target === arr[index]){
       result.push(index);
    }

  }
  return result;
}
console.log(input)
console.log(findOccurences(input, 2));


// min number in the array


console.log("Finding mininum number");


function findMin(arr){
console.log(arr)
  let min = arr[0];
  for(let index =0; index < arr.length; index++){
    console.log({min});
    
    if(arr[index]< min){
      min = arr[index]
    }
  }

  return min;
}

console.log(findMin([ 23, 11, 12, 8, 55, 10,31]));



// finding whether a word exists in a sentence

let sentence = "I love coding in JS";

function findWord(sentence, searchTerm){

  let words = sentence.split(" ");
  console.log(words);

  for(let word of words){
    console.log({word, searchTerm});
    
    if(word === searchTerm){
      return true;
    }
  }

  return false;

}

console.log(findWord(sentence,"coding"));
console.log(findWord(sentence,"me"));




