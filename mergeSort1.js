function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  // Split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);
  
  // Recursively sort the two halves
  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);
  
  // Merge the two sorted halves
  return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(leftHalf, rightHalf) {
  let leftIndex = 0;
  let rightIndex = 0;
  let mergedArray = [];
  
  // Merge the two halves while they are not empty
  while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
    if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
      mergedArray.push(leftHalf[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(rightHalf[rightIndex]);
      rightIndex++;
    }
  }
  
  // Add any remaining elements from the left half
  while (leftIndex < leftHalf.length) {
    mergedArray.push(leftHalf[leftIndex]);
    leftIndex++;
  }
  
  // Add any remaining elements from the right half
  while (rightIndex < rightHalf.length) {
    mergedArray.push(rightHalf[rightIndex]);
    rightIndex++;
  }
  
  return mergedArray;
}

// Example usage:
const unsortedArray = [5, 2, 6, 1, 8, 9];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); 
