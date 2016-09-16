console.log('Are we ready Betty? Yes we are ready!');

//This code adds data about the page from the DOM. It adds it to a p tag with an id of footer

var msg = '<p><b>page title: </b? ' + document.title + '<br />';

msg += '<p><b>page address: </b? ' + document.URL + '<br />';

msg += '<p><b>last modified: </b? ' + document.lastModified + '<br />';

msg += '<p>This code adds data about the page from the DOM. It adds it to a p tag with an id of footer</p>'

var el = document.getElementById('footer');
el.innerHTML = msg;
