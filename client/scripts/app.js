var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    App.startSpinner();
    App.fetch(App.stopSpinner);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages

  },


  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // loop through data array
      for (var i = 0; i < data.results.length; i += 1) {
        if (!data.results[i].hasOwnProperty('text') || data.results[i].text === '') {
          continue;
        }

        if (!data.results[i].hasOwnProperty('username')) {
          data.results[i]['username'] = 'anonymous';
        }

        // add messages
        if (!Messages.allIds.includes(data.results[i].objectId)) {
          Messages.allIds.push(data.results[i].objectId);
          Messages.allMessages.push(data.results[i]);
          // var html = pass into Message.render
          var html = MessageView.render(data.results[i]);
          // append to chats
          $('#chats').append(html);
        } else {
          break;
        }

        // Add new rooms
        var room = data.results[i].roomname;

        if ((!Rooms.list.hasOwnProperty(room)) && (typeof room === 'string' && room.length > 0)) {
          Rooms.list[room] = [];
        } else if (Rooms.list.hasOwnProperty(room)) {
          Rooms.list[room].push(data.results[i]);
        }

      }

    });
    callback();
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

