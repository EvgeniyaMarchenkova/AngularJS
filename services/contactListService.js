
<<<<<<< HEAD

angular.module('myApp').service('contactListService', function(filterFilter) {
=======
app.service('contactListService', function(filterFilter) {
>>>>>>> 3209d6a5e1d61a7f5e72d2f9aec565409c337b08

    this.startContacts = [
        {name:'Pol Smith', phone:'1231212'},
        {name:'Jessika Smith', phone:'1235555'},
        {name:'Crys Black', phone:'1239988'},
        {name:'David White', phone:'1232133'},
        {name:'avid White', phone:'1232133'},
        {name:'bavid White', phone:'1232133'},
    ];

    this.getContact = function(str) {
        return filterFilter(this.getStorage(), str)
    }

    this.addContact = function(name, phone) {
        this.getStorage().push({'name':name, 'phone':phone})
<<<<<<< HEAD
    }

    this.removeContact = function(name) {
        var updatedList = this.getStorage().filter(function (contact, i) {
            return contact.name !== name;
        })
        this.updateStorage(updatedList);
    }

    this.getStorage = function(arr) {
        return JSON.parse(window.localStorage.contacts)
    }

=======
    }

    this.removeContact = function(name) {
        var updatedList = this.getStorage().filter(function (contact, i) {
            return contact.name !== name;
        })
        this.updateStorage(updatedList);
    }

    this.getStorage = function(arr) {
        return JSON.parse(window.localStorage.contacts)
    }

>>>>>>> 3209d6a5e1d61a7f5e72d2f9aec565409c337b08
    this.updateStorage = function(arr) {
        window.localStorage.contacts = JSON.stringify(arr);
    }

});