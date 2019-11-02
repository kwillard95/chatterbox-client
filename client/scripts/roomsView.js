var RoomsView = {

  // $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // loop through Rooms.list
    for (var i = 0; i < Rooms.list.length; i++) {
      var room = Rooms.list[i];
      if ($(`#rooms select option[value='${room}']`).length === 0) {
        this.renderRoom(Rooms.list[i]);
      }
    }
  },

  renderRoom: function(room) {
    // append to $select
    this.$select.append(`<option value= ${room}>${room}</option>`);
  }

};

//if option list does not have an option value of 'room' then render it


