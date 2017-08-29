var app = angular.module('myApp');

app.controller('MainController', function ($scope, contactListService) {
    $scope.shownContacts = contactListService.getAll();
    $scope.updateList = function () {
        $scope.shownContacts = contactListService.getContact($scope.substrFilter);
    }
    $scope.isPhoneShown = true;
    
})
