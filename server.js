var http = require("http");
var url = require("url");

function start(route, handle){
function OnRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("request for"+ pathname + "recieved");
    route(handle, pathname, response, request); 
}
    
   
http.createServer(OnRequest).listen(80);
console.log("server has started");
}

exports.start = start;