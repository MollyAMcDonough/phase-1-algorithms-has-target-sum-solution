function hasTargetSum(array, target) {
  // Write your algorithm here
  /*
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) {
        return true
      }
    }
  }
  return false;
  */
  const seenNumbers = {};
  for (number of array) {
    const complement = target - number;
   
    if (seenNumbers[complement]) {
      return true;
    } 
    seenNumbers[number] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  runtime: O(n^2)
  space: O(n)
  approach 2:
  runtime: O(n)
  space: O(n)
*/

/* 
  Add your pseudocode here.
  Iterate through array, find complement for each number and check rest of
  array for that complement. Return true if match found.

  approach 2: 
  create an object to keep track of numbers we've already seen
  iterate through each number in the array. 
  For the current number, identify the compliment, check object
  for that complement.
*/

/*
  Add written explanation of your solution here
  function that takes in array of integers and target. Returns true if 
  the sum of any two numbers in the array = target. Otherwise
  returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 2, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 0));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, 0, 5], 0));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, 0, 5], 5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5], 0));
}

module.exports = hasTargetSum;
