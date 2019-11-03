var Friends = {
  list: [],

  $select: $('.username'),

  initialize: function() {
    $('.username').click(Friends.handleClick);

    // loop through Rooms.list
    var rooms = Object.keys(Rooms.list);
    for (var i = 0; i < rooms.length; i++) {
      if ($(`#rooms select option[value='${rooms[i]}']`).length === 0) {
        RoomsView.renderRoom(rooms[i]);
      }
    }
    setTimeout(() => App.fetch(Friends.initialize), 3000);
  },

  handleClick: function(event) {
    event.stopPropagation();

    var friend = $(this).text();
    if (confirm('Are you sure?')) {
      Friends.list.push(friend);
      $(this).parent().addClass('friend');
    }
  }

};