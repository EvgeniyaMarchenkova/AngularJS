angular.module('myApp').controller('contactListController', function ($scope, contactListService) {
    $scope.isPhoneShown = true;
    $scope.shownContacts = contactListService.getStorage();

    $scope.updateList = function (value) {
        $scope.shownContacts = contactListService.getFilteredContacts(value);
    }

    $scope.switchCheckbox = function (flag) {
        $scope.isPhoneShown = flag;
    }

    $scope.removeContact = function (name) {
        contactListService.removeContact(name);
        $scope.shownContacts = contactListService.getStorage();
        $scope.substrFilter = '';
    }
})