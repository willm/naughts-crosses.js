var app = require('express').createServer(),
	io = require('socket.io').listen(app),
	colors = ['green','red'];

require('jade');
app.set('view options', {layout: false});

app.get('/*.(js|css)', function(req, res){
  res.sendfile("."+req.url);
});

app.get('/', function(req, res){
	res.sendfile('page.html');	
});

app.listen(3000);

io.sockets.on('connection', function (socket) {
  socket.on('click', function (data) {
  	socket.emit('colorSwitch', {"color" : colors[0]});
    console.log(colors[0]);
    colors.reverse();
  });
});
