var server = require("./server");
var router = require("./routes/router");
var requestHandlers = require("./routes/requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

//Start the server, create a new router and send in all http requests
server.start(router.route, handle);