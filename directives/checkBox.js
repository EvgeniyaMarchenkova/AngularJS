angular.module('myApp').directive('checkBox', function () {
    return {
        restrict: 'EA',
        templateUrl: './templates/checkboxTemplate.html',
        scope: {
            'checkboxHandler': '&'
        },
        controller: function ($scope) {
            $scope.isPhoneShown = true;
        }
    }
})