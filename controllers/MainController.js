var app = angular.module('myApp');

app.controller('MainController', function ($scope, contactListService) {
    $scope.substrFilter = '';
    if ($scope.substrFilter ) {

    }
    $scope.shownContacts = contactListService.getContact($scope.substrFilter);

    $scope.isPhoneShown = true;
    
})
