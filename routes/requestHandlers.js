/**
 * Created by chrisrandle on 11/9/15.
 */
//var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

/* Return Text upload homepage
function start(response, postData) {
    console.log("Request handler 'start' was called.");

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        //upload text to the server via post
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';

    response.writeHead(200, {"Context-Type": "text/html"});
    response.write(body);
    response.end();
}
*/

//Return image upload homepage
function start(response, postData) {
    console.log("Request handler 'start' was called.");

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input type="file" name="upload" multiple="multiple">'+
        '<input type="submit" value="Upload file" />'+
        '</form>'+
        '</body>'+
        '</html>';

    response.writeHead(200, {"Context-Type": "text/html"});
    response.write(body);
    response.end();
}

/* Upload Text to the server
function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(querystring.parse(postData).text);
    response.end();
}
*/

//Upload an image to the server
function upload(response, request) {
    console.log("Request handler 'upload' was called.");

    var form = new formidable.IncomingForm();
    console.log("Start parse");
    form.parse(request, function(error, fields, files) {
        console.log("Parsing complete");

        fs.rename(files.upload.path, "./images/joker.png", function(error) {
            if(error) {
                fl.unlink("./images/joker.png");
                fs.rename(files.upload.path, "./images/joker.png");
            }
        });
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("received image: <br/>);
    response.write("<img src='/show' />");
    response.end();
    });
}
//Show an image from the local directory structure
function show(response) {
    console.log("Request handler 'show' was called.");
    response.writeHead(200, {"Content-Type": "image/jpg"});
    fs.createReadStream("./images/joker.jpg").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;