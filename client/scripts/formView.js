var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var text = $('#message').val();
    var username = App.username;
    var room = $('#rooms select').val();

    var msgObj = new NewMessage(username, text);
    Parse.create(msgObj);
    MessagesView.render(msgObj);

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};