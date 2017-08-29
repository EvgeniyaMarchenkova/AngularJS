var app = angular.module('myApp');

app.controller('MainController', function ($scope, contactListService) {
    $scope.shownContacts = contactListService.getAll();
    $scope.isPhoneShown = true;

    $scope.updateList = function () {
        $scope.shownContacts = contactListService.getContact($scope.substrFilter);
    }

    $scope.removeContact = function(name) {
        contactListService.removeContact(name);
        $scope.shownContacts = contactListService.getAll();
        $scope.substrFilter = '';
    }
    
})
