angular.module('myApp').directive('phoneBook', function () {
    return {
        restrict: 'EA',
        templateUrl: './templates/phoneBookTemplate.html',
        controller: function ($scope, contactListService) {
            $scope.isPhoneShown = true;
            $scope.shownContacts = contactListService.getStorage();

            $scope.updateList = function (value) {
                $scope.shownContacts = contactListService.getContact(value);
            }

            $scope.switchCheckbox = function (flag) {
                $scope.isPhoneShown = flag;
            }

            $scope.removeContact = function(name) {
                contactListService.removeContact(name);
                $scope.shownContacts = contactListService.getStorage();
                $scope.substrFilter = '';
            }
        }
    }
})