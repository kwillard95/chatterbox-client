var MessageView = {

  render: _.template(
    '<div class="chat">' +
        '<a class="username" href=#>' + '<%- username %>:' + '</a>' +
        '<div>' + '<%- text %>' + '</div>' + '</div>')

};

//create a new MessageView