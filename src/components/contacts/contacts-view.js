
Contacts.view = function (ctrl) {
  var vm = Contacts.vm;
  return m('.contacts', [
    m('h3', 'Enter your contact info:'),
    vm.contacts().map(function(contact, idx){
      return m('fieldset', [
        m('legend', "Attendee #" + (idx + 1)),
        m('label', "Name:"),
        m('input[type=text]', {value: contact.name()}),
        m('br'),
        m('label', "Email:"),
        m('input[label=email]', {value: contact.email()})
      ])
    }),
    m('a', {onclick: ctrl.add, href: '#'}, 'Add an Attendee')
  ])
}
