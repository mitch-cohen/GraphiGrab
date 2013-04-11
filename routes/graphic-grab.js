//get dependencies
var util = require('util'),
    path = require('path'),
    Q= require('q'),
    qs = require('querystring'),
    request = require('request');

/* TODO - CREATE A MODULE FOR THE FOLLOWING IN THE FUTURE */
var imgurAPI = {client_id:'37bd7d028bfa3eb',secret:'6b6491e9096071961e828f1414e1d9d8b87e79dc'};





/* END OF FUTURE MODULE CODE */
///create options

var _options={};
_options.base64=function(opt,stream){
    return opt.output =  stream.toString('base64');
};
_options.base64link=function(){};
_options.imgTag=function(){

};
_options.canvas=function(){};
_options.svg=function(){};
_options.imgurUpload=function(base64string){

    request.post('https://api.imgur.com/3/image',{form:{image:base64string,client_id: imgurAPI.client_id}});


};



exports.fetch= function(req, res){
    var url =req.param('filename'),rootDir=require('url');
    //cmd= 'node '+ path.join(__dirname,'node_modules/phantomjs/bin/phantomjs')+' '+ path.join(__dirname,'server/ggServer.js')+ ["'"+url+"'",resolution.width,resolution.height,"'"+imgType+"'"].join(" ");

};

exports.options =function(req,res){
    var keys = [];
    for(var key in _options){
        keys.push(key);
    }
    res.send(keys);
};
