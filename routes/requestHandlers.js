/**
 * Created by chrisrandle on 11/9/15.
 */
function start() {
    console.log("Request handler 'start' was called.");
    return "START";
}

function upload() {
    console.log("Request handler 'upload' was called.");
}

exports.start = start;
exports.upload = upload;