// Find the largest item in the array
function largestItem(arr) {
  var largest = -Infinity
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]
    }
  }
  return largest
}

//Find the smallest item in the array
function smallestItem(arr) {
  var smallest = Infinity
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
    }
  }
  return smallest
}

// Sums all the numbers in the array
function sumArray(arr) {
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
      sum += arr[i]
  }
  return sum
}

// Returns the average of the array
function avgArray(arr) {
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
      sum += arr[i]
  }
  sum = sum / arr.length
  return sum
}

var test = [4,3,1,2,5]

// Sorts the array - bad algorithm
function sortArraybad(arr) {
  var sort = arr[0]
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; i < sort.length; j++) {
      if (arr[i] > sort[j]) {
        sort.push(arr[i])
        break
      }
    }
  }
  return sort
}

var test = [3,4,5,1,2]
// Sorts the array
function sortArray(arr) {
  var smallest = Infinity
  var sorted = []
  while (arr.length > 0) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i]
      }
    }
    var s = arr.indexOf(smallest)
    sorted.push(smallest)
    arr.splice(s,1)
    smallest = Infinity
  }
  return sorted
}

// Bubble Sort
function bubbleSort(arr){
  var swapped
  var j = 1
  do {
    swapped = false
    for (var i=0; i < arr.length-j; i++) {
      if (arr[i] > arr[i+1]) {
        var temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swapped = true
      }
    }
    j++
  } while (swapped);
  return arr
}

// Quick Sort
// test = [2,10,1,9,8,5,6,4,7,3]
i=1 [2,1,10,9,8,7,6,4,7,3]
i=2 [2,1,9,10,8,7,6,4,7,3]
2,1,9,8,7,6,4,7,3,10
function quickSort(arr){
  var half = arr[(Math.ceil(arr.length/2))-1]
  console.log(half)
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > half) {
      var back = arr[i]
      arr.splice(i,1)
      arr.push(back)
    }
    if (arr[i] <= half) {
      var front = arr[i]
      arr.splice(i,1)
      arr.unshift(front)
    }
  }
  return arr
}

// Simple random number generator into an array
function RndNumArray(num) {
  var rndarray = []
  for (var i = 0; i < num; i++) {
    var rnd = Math.ceil(Math.random() * num)
    rndarray.push(rnd)
  }
  return rndarray
}
