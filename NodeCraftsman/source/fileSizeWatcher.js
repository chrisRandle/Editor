'use strict';

watcher = new fileSizeWatcher('./dir/4HHB.xml');

watcher.on('error', function(err) {
    console.log('Error watching file:', err);
});

watcher.on('grow',function(gain) {
    console.log('File gew by ', gain, ' bytes');
});

watcher.on('shrink', function(loss) {
    console.log('File shrank by', loss, 'bytes');
});

watcher.stop();