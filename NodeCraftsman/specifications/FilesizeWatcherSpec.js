'use strict';

var FilesizeWatcher = require('./FilesizeWatcher');
var exec = require('child_process').exec;

describe('FilesizeWatcher', function() {
    var watcher;
    afterEach(function(){
        watcher.stop();
    });

    //First test condition
    it('should fire a "grow" event when the file grows in size', function(done) {
        //This is the path to our test file.
        var path = './tmp/filesizewatcher.test';
        //First remove the file, then make a new empty file
        exec('rm -f ' + path + ' ; touch ' + path, function() {
            //Start watching the empty file
            watcher = new FilesizeWatcher(path);

            //Test for when the file grows it should grow by 5?
            watcher.on('grow', function(gain) {
                expect(gain).toBe(5);
                done();
            });

            exec('echo "test" > ' + path, function() {});
        });
    });

    //Second test condiditon
    it('should fire a "shrank" event when the file grew in size', function(done) {
        var path = './tmp/filesizewatcher.test';
        //Seriously wtf is this
        exec('rm -f ' + path + ' ; echo "test" > ' + path, function() {
            watcher = new FilesizeWatcher(path);

            watcher.on('shrank', function(loss) {
                expect(loss).toBe(3);
                done();
            });

            exec('echo "a" > ' + path, function() {});
        });
    });

    //Thrid test condition
    it('should fire "error" if path does not start with a slash', function(done) {
        var path = 'tmp/filesizewatcher.test';
        watcher = new FilesizeWatcher(path);

        watcher.on('error', function(err) {
            expect(err).toBe('Path does not start with a slash');
            done();
        });
    });
});

