var server = require("./server");
var router = require("./routes/router");

server.start(router.route);