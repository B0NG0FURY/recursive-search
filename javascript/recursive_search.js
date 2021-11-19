function recursiveSearch(arr, target) {
  if (arr.length === 0) {
    return false;
  }

  if (arr[0] === target) {
      return true;
  }
  arr.shift();
  
  return recursiveSearch(arr, target);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file

// 1. if array length is 0, return false. otherwise check the first index value of the array, if it is equal to target return true, otherwise use shift to remove first element and run the function again with the newly shortened array.

// And a written explanation of your solution
