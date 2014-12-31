var http = require("http");

    function start(){
        function onRequest(request, response){
            response.writeHead(200, {"Content-Type" : "text/plain"});
            response.write("Hello world");
            var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress || 
                      request.socket.remoteAddress || request.connection.socket.remoteAddress;
            console.log("Request received from " + ip);
            
            response.end();
        }
        
        http.createServer(onRequest).listen(1337);
   }

exports.start = start;
