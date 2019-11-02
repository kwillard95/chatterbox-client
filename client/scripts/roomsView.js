var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.on('change', RoomsView.handleSubmit);
    RoomsView.$button.on('click', RoomsView.addNewRoom);
    // loop through Rooms.list
    var rooms = Object.keys(Rooms.list);
    for (var i = 0; i < rooms.length; i++) {
      if ($(`#rooms select option[value='${rooms[i]}']`).length === 0) {
        this.renderRoom(rooms[i]);
      }
    }
    setTimeout(() => App.fetch(this.initialize.bind(this)), 3000);
  },

  renderRoom: function(room) {
    // append to $select
    this.$select.append(`<option value='${room}'>${room}</option>`);
  },

  selectRoom: function(room) {
    this.$select.append(`<option value='${room}'>${room}</option>`);
    this.$select.val(room).trigger('change');
  },

  addNewRoom: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var room = $('#new-room').val();

    if (!Rooms.list.hasOwnProperty(room)) {
      Rooms.list[room] = [];
      RoomsView.selectRoom(room);
    }
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    $('#chats').empty();

    var room = $('#rooms select').val();
    //clear chat
    var array = Rooms.list[room];
    for (var i = 0; i < array.length; i++) {
      var html = MessageView.render(array[i]);
      // append to chats
      $('#chats').append(html);
    }
    //take the room value and loop through corresponding property in roomsList
    //call render

  }
};




