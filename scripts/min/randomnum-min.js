// var answer = (Math.random()*100);
// alert(answer)
// if ((answer % 1) >= .5) {
//   answer = Math.ceil(answer)
// } else {
//   answer = Math.floor(answer)
// }
// alert(answer)

// without using built-in Math fuction
var answer = (Math.random()*100)
alert(answer)
var answerstr = answer.toString()
var dotindex = answerstr.indexOf(".")
alert(dotindex)
var int = answerstr.substr(0,dotindex)
alert(int)
var remainder = answerstr.substr(dotindex)
alert(remainder)

if (Number(remainder) >= 0.5) {
    int = Number(int) + 1
} else Number(int)

alert(int)


