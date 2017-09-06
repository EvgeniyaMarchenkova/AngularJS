angular.module('myApp', ['ui.router'])
    .run(function(contactListService, $state) {
        var startContacts = [
            {name: 'Pol Smith', phone: '1231212', id: 123},
            {name: 'Jessika Smith', phone:'1235555', id: 255 },
            {name: 'Crys Black', phone:'1239988', id: 112},
            {name: 'David White', phone:'1232133', id: 432},
            {name: 'Androu White', phone:'1232133', id: 503},
            {name: 'Bill White', phone:'1232133', id: 278}
        ];
    
        contactListService.updateStorage(startContacts);
        $state.go('contactsList');

    })
    .config(function ($stateProvider) {
        $stateProvider
            .state('contactsList', {
                url: '/',
                templateUrl:  './templates/phoneBookTemplate.html',
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
            })
            .state('contacts', {
                abstract: true,
                url: '/contacts',
                templateUrl: './templates/contactFormTemplate.html',
                controller: function ($scope) {
                    $scope.formData = {};
                }
            })
            .state('contacts.add', {
                url: '/add',
                templateUrl: './templates/addTemplate.html'
            })
            .state('contacts.update', {
                url: '/:contactId',
                templateUrl: './templates/updateTemplate.html',
                params: {
                    contactId: '/'
                }
            })
    })