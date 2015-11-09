//This is where the websites navigation happens
function route(handle, pathname) {
    console.log("Prepare to route a request " + pathname);
    //Check to see if the requested url path exists
    if (typeof handle[pathname] === 'function') {
        return handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
        return "404 Not Found";
    }
}

exports.route = route;