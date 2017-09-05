angular.module('myApp').directive('itemContact', function () {
    return {
        restrict: 'EA',
        templateUrl: './templates/itemContactTemplate.html',
        scope: {
            'contact': '=',
            'isPhoneShown': '=',
            'name': '@',
            'removeHandler': '&'
        },
        link: function ($scope, $element) {
            if ($scope.name.charAt(0) === 'a') {
                $element.addClass('red');
            }
            else if ($scope.name.charAt(0) === 'b') {
                $element.addClass('blue');
            }
        }
    }
})