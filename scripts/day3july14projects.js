//Global function creating string.reverse()
String.prototype.reverse = function() {
	return this.split("").reverse().join("");
};

function hello(name) {
  return "Hello " + name + "!";
};

function massGreetings(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(greetings(arr[i]));
  };
};

function fullName(first, last) {
  return (first + " " + last);
};

function isPalindrome(str) {
  var newStr = str.toLowerCase();
  return newStr === newStr.reverse();
  // return newStr === newStr.split("").reverse().join("")
};

function helloPal(name) {
  var notStr = "";
  if (!isPalindrome(name)) {
    notStr = " NOT";
  };
  return hello(name) + " Your name IS" + notStr + " a palindrome!";
};

function ssnMask() {
  ssn = prompt("Enter your SSN:")
  // ssn = ssn.toString();
  // ssn = ssn.substr(-4);
  return "***-**-" + ssn.toString().substr(-4);
};

function genOneRndNum(max) {
  return Math.ceil(Math.random() * max)
}

function genRndNumMinMax(min, max) {
  if (min > max) {
    var temp = min;
    min = max;
    max = temp;
  }
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

function genRndNumStatic() {
  var rndArray = [];
  for (var i = 0; i < 10; i++) {
      var newNum = genOneRndNum(100);
      rndArray.push(newNum);
  };
  return rndArray;
};

function genRndNumList(n, max) {
  if (n > max) {
    return alert("Invalid input, your 1st argument must be less than or equal to your 2nd argument.");
  };
  var rndArray = [];
  for (var i = 0; i < n; i++) {
    while (true) {
      var newNum = genOneRndNum(max);
      // console.log(newNum);
      if (rndArray.indexOf(newNum) === -1) {
        rndArray.push(newNum);
        // console.log(rndArray);
        break;
      };
    };
  };
  return rndArray;
};

function genRndNumListMinMax(n, min, max) {
  if (n > (max - min + 1)) {
    return alert("Invalid input, your 1st argument must be less than or equal to your 2nd argument.");
  };
  var rndArray = [];
  for (var i = 0; i < n; i++) {
    while (true) {
      var newNum = genRndNumMinMax(min, max);
      // console.log(newNum);
      if (rndArray.indexOf(newNum) === -1) {
        rndArray.push(newNum);
        // console.log(rndArray);
        break;
      };
    };
  };
  return rndArray;
};
