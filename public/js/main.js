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
                $scope.postData={};
                $http.get('/graphic-grab/options').success(
                    function(options){
                        options.forEach(function(o){
                            $scope.options[$scope.options.length]= {title:o,checked:false};
                        });
                    }
                );
            },
        link: function (scope, iElement, tAttrs, controller) {
            var form = iElement.find('form');
            console.log(form);
            form.on('submit',function(e){
                e.preventDefault();
                form.ajaxSubmit({
                    replaceTarget: false,
                    data:scope.settings,
                    beforeSend: function(){
                        console.log(scope);
                    },
                    success:function(res){
                        console.log(res);
                        var img =$('<img src="'+res+'" >');
                        console.log(img);
                        $('#output').empty().append(img);
                    }});
                return false;
            }) ;

        }
    };
});