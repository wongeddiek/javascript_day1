function greetings(name) {
  return "Hello " + name + "!"
}

function massGreetings(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(greetings(arr[i]))
  }
}

function fullName(first, last) {
  return (first + " " + last)
}

function palindromeCheck(str) {
  var newStr = str.toLowerCase()
  return newStr == newStr.split("").reverse().join("")
}

function ssnMask(ssn) {
  ssn = ssn.toString()
  ssn = ssn.substr(-4)
  return "*****" + ssn
}

function rndNumArray(n, max) {
  var rndArray = []
  for (var i = 0; i < n; i++) {
    rndArray.push(Math.ceil(Math.random() * max))
  }
  return rndArray
}

// var test = rndNumArray(10, 100)
// console.log(test)


