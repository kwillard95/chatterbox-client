var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll((data) => {

      // loop through data array
      for (var i = 0; i < 25; i += 1) {
        console.log(data.results[i]);
        if (!data.results[i].hasOwnProperty('username') && !data.results[i].hasOwnProperty('text')) {
          continue;
        }
        // var html = pass into Message.render
        var html = MessageView.render(data.results[i]);
        // append to chats
        this.$chats.append(html);
      }

    });
  },

  render: function(message) {
    var html = MessageView.render(message);
    this.$chats.append(html);
  }

};