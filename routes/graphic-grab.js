exports.fetch= function(req, res){
    res.send(req.param('url'));
};