var path = process.argv[2];
var extensionFilter = process.argv[3];

var fls = require('./ffModule.js')

function printIt(err, data){
  if(err){
    return err;
  }
  else{
    data.forEach(function(file){
      console.log(file);
    })
  }
}

fls(path, extensionFilter, printIt);
