//This is where the websites navigation happens
/* Posting Text example
function route(handle, pathname, response, postData) {
    console.log("Prepare to route a request " + pathname);
    //Check to see if the requested url path exists
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postData);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}
*/

// Posting images example
function route(handle, pathname, response, request) {
    console.log("Prepare to route a request " + pathname);
    //Check to see if the requested url path exists
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;