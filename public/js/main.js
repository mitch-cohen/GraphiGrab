/*
 $(function(){

 $('form#gg').ajaxForm({replaceTarget: false,success:function(res){
 $('#output').html(res);
 }})

 });
 */

var app = angular.module("app",[]);


app.directive("graphicGrab",function(){
    return {
        transclude: false,
        controller:
            function ($scope, $http){
                $scope.resolutions=[
                    {title:'768x1024',width:768,height:1024},
                    {title:'800x600',width:800,height:600},
                    {title:'1024x600',width:1024,height:600},
                    {title:'1024x640',width:1024,height:640},
                    {title:'1024x768',width:1024,height:768},
                    {title:'1093x614',width:1093,height:614},
                    {title:'1152x864',width:1152,height:864},
                    {title:'1280x1024',width:1280,height:1024},
                    {title:'1280x720',width:1280,height:720},
                    {title:'1280x768',width:1280,height:768},
                    {title:'1280x800',width:1280,height:800},
                    {title:'1280x960',width:1280,height:960},
                    {title:'1360x768',width:1360,height:768},
                    {title:'1366x768',width:1366,height:768},
                    {title:'1440x900',width:1440,height:900},
                    {title:'1600x900',width:1600,height:900},
                    {title:'1680x1050',width:1680,height:1050},
                    {title:'1920x1080',width:1920,height:1080},
                    {title:'1920x1200',width:1920,height:1200}
                ];
                $scope.postData={};
                console.log('inside controller');
            },
        link: function (scope, iElement, tAttrs, controller) {
            var form = iElement.find('form');
                     console.log(form);
            form.ajaxForm({
                replaceTarget: false,
                beforeSend: function(){
                    console.log(scope);
                    return false;
                },
                success:function(res){
                    $('#output').html(res);
                }});
        }
    };
});