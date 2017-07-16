function findPrime(max) {
  var primelist = []
  for (var x = 2; x <= max; x++) {
    var isprime = x
    for (var i = 2; i <= isprime; i++) {
      if (i == isprime) {
        primelist.push(isprime)
      }
      if (isprime % i == 0) {
        break
      }
    }
  }
  return primelist
}

// myPrimeList = findPrime(50)
// console.log(myPrimeList)
//
//
// var array = [2,3,4,5,6,7,8,9,10]

// Prime finder using Sieve of Eratosthenes algorithm
function findPrime(max) {
  var arr = []
  for (var i = 2; i <= max; i++) {
    arr.push(i)
  }
  // console.log("Prime Array: " + arr)
  for (var i = 0; i < arr.indexOf(Math.ceil(Math.sqrt(max))); i++) {
    for (var j = arr[i];arr[i]*j <= max; j++) {
      // console.log("we are at number :" + arr[i] )
      var multval = arr[i]*j
      // console.log("multiple is:" + multval)
      var multiple = arr.indexOf(arr[i]*j)
      // console.log("multiple index is :" + multiple)
      if (multiple != -1) {
        arr.splice(multiple,1)
        // console.log("removed " + multiple + "new array :" + arr)
      }
    }
  }
  return arr
}


