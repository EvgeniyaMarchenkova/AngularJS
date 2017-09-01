angular.module('myApp').directive('searchForm', function () {
    return {
        restrict: 'EA',
        templateUrl: './templates/searchTemplate.html',
        scope: {
            'updateHandler': '&'
        },
        controller: function ($scope) {
            $scope.inputValue = '';
        }
    };
});