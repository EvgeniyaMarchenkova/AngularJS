angular.module('myApp', ['ui.router'])
    .run(function(contactListService, $state) {
        var startContacts = [
            {name:'Pol Smith', phone:'1231212'},
            {name:'Jessika Smith', phone:'1235555'},
            {name:'Crys Black', phone:'1239988'},
            {name:'David White', phone:'1232133'},
            {name:'Androu White', phone:'1232133'},
            {name:'Bill White', phone:'1232133'},
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
                templateUrl: './templates/contactFormTemplate.html'
            })
            .state('contacts.add', {
                url: '/add',
                templateUrl: './templates/addTemplate.html'
            })
            .state('contacts.update', {
                url: '/update',
                templateUrl: './templates/updateTemplate.html'
            })
    })