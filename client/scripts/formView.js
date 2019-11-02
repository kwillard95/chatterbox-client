var FormView = {

  $form: $('form .submit'),

  initialize: function() {
   
    FormView.$form.on('click', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var text = $('#message').val();
    var username = App.username;
    var room = $('#rooms select').val();

    var msgObj = new NewMessage(username, text, room);
    Parse.create(msgObj);

    console.log('click!');
    $('form #message').val('');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};