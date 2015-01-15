var fs = require('fs')
var path = process.argv[2]
var count = 0

function readFile(callback){
  fs.readFile(path, function doneReading(err, buffer){
    var string = buffer.toString()
    count = string.split('\n').length  -1 //subtract one because the number of elements in the array is one less than the number of lines.
    callback()
  })
}
function logLineCount(){
  console.log(count)
}

readFile(logLineCount)
