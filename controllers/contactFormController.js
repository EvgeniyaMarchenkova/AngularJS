angular.module('myApp').controller('contactFormController', function ($scope, contactListService, $state, $stateParams) {
    $scope.formData = contactListService.findElementById($stateParams.contactId) || {};
    $scope.processForm = function () {
        if (!$scope.formData.id) {
            contactListService.addContact($scope.formData);
        }
        else {
            contactListService.updateContact($scope.formData);
        }
        $state.go('contactsList');
    }
})
