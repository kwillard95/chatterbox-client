var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    setTimeout(() => App.fetch(this.initialize.call(this)), 3000);
  },

  render: function(message) {
    var html = MessageView.render(message);
    this.$chats.append(html);
  }

};
