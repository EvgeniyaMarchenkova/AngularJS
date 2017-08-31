angular.module('myApp').directive('phoneBook', function () {
    return {
        restrict: "EA",
        templateUrl: './templates/phoneBookTemplate.html',
        controller: function ($scope, contactListService) {

            $scope.isPhoneShown = true;
            contactListService.updateStorage(contactListService.startContacts);
            $scope.shownContacts = contactListService.getStorage();

            $scope.updateList = function () {
                $scope.shownContacts = contactListService.getContact($scope.substrFilter);
            }

            $scope.removeContact = function(name) {
                contactListService.removeContact(name);
                $scope.shownContacts = contactListService.getStorage();
                $scope.substrFilter = '';
            }
        }
    };
});