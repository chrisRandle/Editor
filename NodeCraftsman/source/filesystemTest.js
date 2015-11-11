/*
var fs = require('fs');
//File System operation runs over multiple event loops
fs.stat('/etc/passwd', function(err, stats) {
    console.dir(stats);
});
*/

/*
//Http listener runs forever serving requests
var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<b>Hello World</b>');
    response.end();
}).listen(8080);
*/

/*
//Proof that if you have enough cheap synchronous functions within one event loop iteration blocking will occur
var http = require('http');
http.createServer(function(request, response) {
    console.log('Handling HTTP request');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<b>Hello World</b>');
    response.end();
}).listen(8080);

var a;
for (var i=0; i < 10000000000; i += 1) {
    a = i;
}

console.log("for loop done");
*/

/*
'use strict';

var fs = require('fs');

var stream =  fs.createReadStream('./dir/4HHB.xml');
//Callback on event type 'data' do anonymous function in this case console.log
stream.on('data', function(data) {
    console.log('Received data: ' + data);
});
//Callback on event type 'end' do anonymous function in this case console.log
stream.on('end', function() {
    console.log('End Of File');
});
*/

//Clean up the stream example
'use strict';

var fs = require('fs');

var stream = fs.createReadStream('./dir/4HHB.xml');
var content = '';

stream.on('data', function(data) {
    content += data;
});

stream.on('end', function() {
    console.log("The Content: \n" + content);
});
//Still kind of dumb. As we read chunks to avoid excess memory usage but end up putting it all in memory anyway.
