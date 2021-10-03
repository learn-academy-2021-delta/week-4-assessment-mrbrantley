// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("shuffleColors", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    expect(shuffleColors(colors1)).toContain("yellow" && "blue" && "pink" && "green")
    expect(shuffleColors(colors2)).toContain("saffron" && "aquamarine" && "periwinkle" && "indigo" && "ochre")
  })
})

// b) Create the function that makes the test pass.

//First I want to define a function that takes in an array
const shuffleColors = (array) => {
  //Next I want to cut the first index off of the input array. I will not need to define a new variable because .shift is a mutator that will permanently alter the input array
  array.shift()
  //Finally I want to randomize the indeces of the remaining array. I had to do research but found a way to randomize using the sort function.
    //.sort iterates over an array evaluating if the current value minus the next value is less than zero, if so, it evaluates to true and places the value at the beginning of the array until all values in the array meet this condition. 
      //Usually .sort applied to an array of strings orders them alphabetically, but that evaluation is moot if we set the method to check numbers instead.
      //Math.random generates a float between 0 and 1. If we set the .sort method to compare it against the exact middle point of this range (0.5), the method will evaluate to true (or the first value minus the second value is less than zero) any time the random float is above 0.5. Any time the evaluation randomly evaluates to true, it will log the element of our input array at that iteration to the beginning of the new array until all values are true.
      //Sorry for the essay but I really wanted to know how this works. 
  return array.sort((a, b) => 0.5 - Math.random())
}

//Test passes

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

describe("minMax", () => {
  it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
    expect(minMax(nums1)).toEqual([-8, 90])
    expect(minMax(nums2)).toEqual([5, 109])
  })
})

//Test failed successfully

// b) Create the function that makes the test pass.

//I need to declare a function that takes in an array as a parameter
const minMax = (array) => {
  // I will first create a variable that uses the sort method to sort the input array from smallest value to largest value
  let sortedArr = array.sort((a, b) => a - b)
  //Now that the input array is sorted I want to return the values at the first[0] and last indexes (smallest and largest values from the original input array) into an array with only two elements. I will use some math applied to the .length method to dispalay the value of the last index of the sorted array. 
  return [sortedArr[0], sortedArr[sortedArr.length-1]]
}

//Test passes


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("cleanCombine", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(cleanCombine(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

//Test failed successfully

// b) Create the function that makes the test pass.

// //First I want to create a function with two arrays as inputs
// const cleanCombine = (array1, array2) => {
//   //I will combine the two arrays using the spread operator when defining a new variable
//   let combined = [...array1, ...array2]
//   //Now that my input arrays are combined into a single array I want to filter out repeating values using the .filter higher order function
//   return combined.filter((value, index) => {
//      //I want to filter out any values where the value at an index is equal to the first index of the same value using .indexOf method
//     return combined.indexOf(value) === index
//    })
//  }

//Test passes

//Stretch refactor!

//Define a function that takes in an undefined number of arrays using the spread operator
const cleanCombine = (...arrays) => {
  let empty = []
  // In order to concat all of the arrays, the starting array must be empty, so I defined an empty array. Because .concat is an accessor and not a mutator, and I want to apply other methods to this combined array, I will define a new array (that can be used later) that concatenates the empyty array to the unknown amount of input arrays
  let combined = empty.concat(...arrays)
  //Use same methods from first attempt to filter out repeating values across the combined input arrays
  return combined.filter((value,index) => {
    return combined.indexOf(value) === index
  })
}

//Test passes!