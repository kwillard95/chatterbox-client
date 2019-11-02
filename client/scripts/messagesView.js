var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function(message) {
    var html = MessageView.render(message);
    this.$chats.append(html);
  }

};
