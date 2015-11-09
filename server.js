var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        //route(handle, pathname);

        //Always provide the Http header info
        response.writeHead(200, {"Content-Type": "text/plain"});
        //For testing write hello world
        response.write("Hello World" + "\n");
        //Bad example That works
        var content = route(handle, pathname)
        response.write(content);
        //End the responses
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
exports.start = start;



