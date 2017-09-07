angular.module('myApp', ['ui.router', 'ngMessages'])
    .run(function(contactListService, $state) {
        var startContacts = [
            {name: 'Pol Smith', phone: '+375291213478', id: 123},
            {name: 'Jessika Smith', phone:'+375443427332', id: 255 },
            {name: 'Crys Black', phone:'+375291997332', id: 112},
            {name: 'David White', phone:'+3754434255521', id: 432},
            {name: 'Androu White', phone:'+37529897332', id: 503},
            {name: 'Bill White', phone:'+375443426655', id: 278}
        ];

        contactListService.updateStorage(startContacts);
    })

