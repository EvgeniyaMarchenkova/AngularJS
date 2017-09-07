angular.module('myApp').service('contactListService', function(filterFilter, $window) {
    this.getContact = function(str) {
        return filterFilter(this.getStorage(), str)
    }

    this.addContact = function(data) {
        var listContacts = this.getStorage();
        listContacts.push({'name': data.name, 'phone': data.phone, 'id': Date.now()});
        this.updateStorage(listContacts);
    }
    
    this.updateContact = function (data) {
        var listContacts = this.getStorage();
        listContacts.forEach(function(contact, i) {
            if (contact.id === data.id) {
                contact.name = data.name;
                contact.phone = data.phone;
            }
        })
        this.updateStorage(listContacts);
    }
    
    this.removeContact = function(name) {
        var updatedList = this.getStorage().filter(function (contact, i) {
            return contact.name !== name;
        })
        this.updateStorage(updatedList);
    }

    this.getStorage = function(arr) {
        return JSON.parse($window.localStorage.contacts)
    }

    this.updateStorage = function(arr) {
        $window.localStorage.contacts = JSON.stringify(arr);
    }
    
    this.findElementById = function (id) {
        var findedElm;
        this.getStorage().forEach(function( contact ) {
            if (contact.id == id) {
                findedElm = contact;
            }
        })
        return findedElm;
    }
})