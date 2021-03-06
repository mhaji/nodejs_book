var http = require("http");
var url = require("url");

function start(route){
    function onRequest(request, response){
        var path = url.parse(request.url).pathname;
        var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress || 
                  request.socket.remoteAddress || request.connection.socket.remoteAddress;
        console.log("Request received for " + path + " from " + ip);
       
        route(path);
        
        response.writeHead(200, {"Content-Type" : "text/plain"});
        response.write("Hello world");
        response.end();
    }
    
    http.createServer(onRequest).listen(1337);
}

exports.start = start;
