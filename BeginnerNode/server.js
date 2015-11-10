var http = require("http");
var url = require("url");
//var formidable = require('formidable');

/* Function to handle Text input into form
function start(route, handle) {
    function onRequest(request, response) {
        //Place Holder for incoming data from POST operations
        var postData = "";
        //Parse incoming URL requests for processing by the router
        var pathname = url.parse(request.url).pathname;
        //LOG Actions
        console.log("Request for " + pathname + " received.");

        //Assume encoding of received data will be utf8
        request.setEncoding("utf8");

        //Listener for recording POST data
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            //Don't keep this log line for production COULD GET REALLY BIG
            console.log("Received POST data chunk '" + postDataChunk + "'.");
        });

        //After all POST data is gathered route the request
        request.addListener("end", function() {
            route(handle, pathname, response, postData);
        });
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
*/

// Function to handle upload of image file
function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(handle, pathname, response, request);
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
exports.start = start;



