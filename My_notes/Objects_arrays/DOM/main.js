console.log('Are we ready Betty? Yes we are ready!');

//This code adds data about the page from the DOM. It adds it to a p tag with an id of footer

var msg = '<p><b>page title: </b? ' + document.title + '<br />';

msg += '<p><b>page address: </b? ' + document.URL + '<br />';

msg += '<p><b>last modified: </b? ' + document.lastModified + '<br />';

msg += '<p>This code adds data about the page from the DOM. It adds it to a p tag with an id of footer</p>'

var el = document.getElementById('footer');
el.innerHTML = msg;


//String methods

var saying = 'Home sweeet home';

var msg = '<h3> length saying.length</h3> <p>' + saying.length + '</p>';
msg += '<h3> saying.toUpperCase </h3> <p>' + saying.toUpperCase() + '</p>';
msg += '<h3> saying.toLowerCase </h3> <p>' + saying.toLowerCase() + '</p>';
msg += '<h3> character number 12</h3> <p>' + saying.charAt(12) + '</p>';
msg += '<h3> first ee </h3> <p>' + saying.indexOf('ee') + '</p>';
msg += '<h3> last e </h3> <p>' + saying.lastIndexOf('e') + '</p>';
msg += '<h3> character index 8-14 ie substring</h3> <p>' + saying.substring(8,14) + '</p>';
msg += '<h3> replace </h3> <p>' + saying.replace('me','w') + '</p>';

var el1 = document.getElementById('info');
el1.innerHTML = msg;
