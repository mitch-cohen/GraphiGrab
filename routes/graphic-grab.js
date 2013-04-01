


var util = require('util'),
    exec = require('child_process').exec,
    path = require('path'),
    util=require('util'),
    child,
    path = require('path');
            /*
child = exec(),
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });       */


exports.fetch= function(req, res){
    var url =req.param('url'),rootDir=require('path').dirname(module.parent.filename),resolution =req.param('resolution'),  imgType =req.param('imgType'),cmd=''  ;
    //cmd= 'node '+ path.join(__dirname,'node_modules/phantomjs/bin/phantomjs')+' '+ path.join(__dirname,'server/ggServer.js')+ ["'"+url+"'",resolution.width,resolution.height,"'"+imgType+"'"].join(" ");
    var spawn = require('child_process').spawn,
    scriptPath = path.join(rootDir,'/server/ggServer.js'),
    pjs=spawn("/usr/local/bin/phantomjs",[scriptPath,url,resolution.width,resolution.height,imgType]);
    console.log(scriptPath);
    pjs.stdout.on('data', function (data) {
        console.log(data);

        console.log('data being send')
        res.send(data);

    });

    pjs.stderr.on('data', function (data) {
        console.log('error')
        console.log(data.toString());

        res.send(data);


    });
    pjs.on('close', function (code) {
        console.log('child process exited with code ' + code);
    });

    req.connection.on('end', function() {
        pjs.kill();
    })
};

