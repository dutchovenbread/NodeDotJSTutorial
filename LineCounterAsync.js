var fs = require('fs')
var path = process.argv[2]

function countLines(){
  fs.readFile(path, function doneReading(err, buffer){
    var string = buffer.toString()
    var count = string.split('\n').length  -1 //subtract one because the number of elements in the array is one less than the number of lines.
    console.log(count)
  })
}

countLines()
