
angular.module('myApp').service('contactListService', function(filterFilter, $window) {
    this.getContact = function(str) {
        return filterFilter(this.getStorage(), str)
    }

    this.addContact = function(name, phone) {
        this.getStorage().push({'name': name, 'phone': phone})
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

});