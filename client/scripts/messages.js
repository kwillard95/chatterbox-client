var Messages = {
  allMessages: [],
  allIds: []
};

//message class

var NewMessage = function(username, text, roomname) {
  this.username = username;
  this.text = text;
  this.roomname = roomname;

  //Parse.create(text,tbd,tbd)
  //Message.allMessages.push(this)
};