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
                templateUrl:  './templates/phoneBookTemplate.html'
            })
            .state('contactForm', {
                url: '/contactForm',
                templateUrl:  './templates/contactFormTemplate.html'
            });
    })