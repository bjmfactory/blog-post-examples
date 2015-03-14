
Contacts.view = function (ctrl) {
  var vm = Contacts.vm;

  var removeAnchor = function(idx){
    if(vm.contacts().length >= 2){
      return m('a', {onclick: ctrl.remove.curry(idx), href: '#'}, 'Remove Attendee')
    }
  }
  return m('.contacts', [
    m('h3', 'Enter your contact info:'),
    vm.contacts().map(function(contact, idx){
      return m('fieldset', [
        m('legend', "Attendee #" + (idx + 1)),
        m('label', "Name:"),
        m('input[type=text]', {
          value: contact.name(),
          onchange: m.withAttr('value', contact.name)
        }),
        m('br'),
        m('label', "Email:"),
        m('input[label=email]', {
          value: contact.email(),
          onchange: m.withAttr('value', contact.email)
        }),
        removeAnchor()
      ])
    }),
    m('a', {onclick: ctrl.add, href: '#'}, 'Add an Attendee')
  ])
}
