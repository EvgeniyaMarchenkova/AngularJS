var app = angular.module('myApp');

app.controller('MainController', function ($scope) {
    $scope.contacts = [
        {name:'Pol Smith', phone:'1231212'},
        {name:'Jessika Smith', phone:'1235555'},
        {name:'Crys Black', phone:'1239988'},
        {name:'David White', phone:'1232133'},
        {name:'avid White', phone:'1232133'},
        {name:'bavid White', phone:'1232133'},
    ];
    $scope.isPhoneShown = true;
    
})
