angular.module('myApp').directive('itemContact', function () {
    return {
        restrict: 'EA',
        templateUrl: './templates/itemContactTemplate.html',
        scope: {
            'contact': '=',
            'isPhoneShown': '=',
            'name': '@'
        },
        link: function ($scope, $element) {
            console.log($scope.$parent.isPhoneShown);
            console.log($scope.isPhoneShown);
            if ($scope.name.charAt(0) === 'a') {
                $element.addClass('red');
            }
            else if ($scope.name.charAt(0) === 'b') {
                $element.addClass('blue');
            }
        }
    }
})