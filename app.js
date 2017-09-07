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

