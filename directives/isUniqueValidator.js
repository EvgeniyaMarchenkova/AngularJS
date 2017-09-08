angular.module('myApp').directive('isUnique', function (contactListService) {
    return {
        require: 'ngModel',
        link: function($scope, $element, $attrs, $controller) {
            var arrOfNames = contactListService.getStorage().reduce(function (prevResult, elm) {
                prevResult.push(elm.name);
                return prevResult;
            }, []);
            $controller.$validators.isUnique = function($modelValue, $viewValue) {
                return !arrOfNames.includes($viewValue);
            };
        }
    }
})

