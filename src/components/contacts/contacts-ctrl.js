
Contacts = {}

Contacts.model = function () {
  this.name = m.prop('enter a name');
  this.email = m.prop('enter an email');
};

Contacts.vm = {}

Contacts.controller = function () {
  var ctrl = this;
  ctrl.contacts = m.prop([new Contacts.model()]);
}
