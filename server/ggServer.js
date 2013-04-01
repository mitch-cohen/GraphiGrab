var page = require('webpage').create(),
    system = require('system'),
    address,
    width,
    height,
    imgType;




if (system.args.length >= 4) {
    address= system.args[1];
    width= system.args[2];
    height= system.args[3];
    imgType = system.args[4];
    resolution= {width: parseInt(width,10), height: parseInt(height,10)};


    page.viewportSize=resolution;
    //console.log(system.args);
    page.open(address, function (status) {
        if(status =='success'){
            var base64 = page.renderBase64(imgType);
            console.log(JSON.stringify({img:{src: "data:image/"+imgType.toLowerCase()+";base64,"+base64,width: resolution.width, height: resolution.height}, address: address, imgType: imgType}));
            phantom.exit();
        }
        else{
            console.log(JSON.stringify({errorStatus:status}));
        }
    });

}else{

    phantom.exit(1);
}