var fs = require('fs')
var p = require('path')
var path = process.argv[2]
var filter = process.argv[3]
var ending = '.' + filter

function readFile(){
  fs.readdir(path, function doneReading(err, list){
    var filteredResult = []
    for(i=0; i< list.length; i++){
      if (p.extname(list[i]) == ending){
        console.log(list[i])
      }
    }
  })
}

readFile()
