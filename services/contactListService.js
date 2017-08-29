var app = angular.module('myApp');

app.service('contactListService', function(filterFilter) {
    var contacts = [
        {name:'Pol Smith', phone:'1231212'},
        {name:'Jessika Smith', phone:'1235555'},
        {name:'Crys Black', phone:'1239988'},
        {name:'David White', phone:'1232133'},
        {name:'avid White', phone:'1232133'},
        {name:'bavid White', phone:'1232133'},
    ];
    this.getAll = function () {
        return contacts;
    }
    this.getContact = function(str) {
        return filterFilter(contacts, str)
    }
    this.addContact = function(name, phone) {
        contacts.push({'name':name, 'phone':phone})
    }
    this.removeContact = function(name, phone) {
        contacts.push({'name':name, 'phone':phone})
    }
});