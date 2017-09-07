angular.module('myApp')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('contactsList', {
                url: '/',
                templateUrl:  './templates/phoneBookTemplate.html',
                controller: 'contactListController'
            })
            .state('contacts', {
                abstract: true,
                url: '/contacts',
                templateUrl: './templates/contactFormTemplate.html',
                controller: 'contactFormController'
            })
            .state('contacts.add', {
                url: '/add',
                templateUrl: './templates/addTemplate.html'
            })
            .state('contacts.update', {
                url: '/:contactId',
                templateUrl: './templates/updateTemplate.html'
            })

        $urlRouterProvider.when('', '/');
    })