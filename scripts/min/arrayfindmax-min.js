function largestItem(arr) {
  var largest = -Infinity
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]
    }
  }
  return largest
}

var test = [5,7,9,100,15]
console.log(largestItem(test))


