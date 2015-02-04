var fs = require('fs')
var p = require('path')

function filterLS(path, extensionFilter, callback){
  fs.readdir(path, function(err, list){
    if (err){
      return callback(err);
    }
    else{    
      var filteredResult = [];
      for(i=0; i< list.length; i++){
        //console.log('Evaluating file name: ' + list[i]);
        //console.log('p.extname is: ' + p.extname(list[i]));
        //console.log('Extension is: ' + extensionFilter);
        if (p.extname(list[i]) == '.' + extensionFilter){
          filteredResult.push(list[i])
        }
      }
      callback(err, filteredResult);
    }
  })
}

module.exports = filterLS;