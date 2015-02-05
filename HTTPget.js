http = require('http');

var target = process.argv[2];

http.get(target, function(response){
  response.setEncoding("utf-8");
  response.on("data", console.log);
  response.on("error", console.error);
})