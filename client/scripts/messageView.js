var MessageView = {

  render: _.template(
    '<div class="chat">' +
        '<div class="username" href=#>' + '<%- username %>:' + '</div>' +
        '<div>' + '<%- text %>' + '</div>' + '</div>')

};

//create a new MessageView