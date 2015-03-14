
Contacts = {}

Contacts.model = function () {
  this.name = m.prop('[your name]');
  this.email = m.prop('[your email]');
};

Contacts.vm = {
  contacts: m.prop([new Contacts.model()])
}

Contacts.controller = function () {
  var ctrl = this;
}
