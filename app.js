var app = require('express').createServer(),
	io = require('socket.io').listen(app);

require('jade');
//app.set('view engine', 'jade');
app.set('view options', {layout: false});

app.get('/*.(js|css)', function(req, res){
  res.sendfile("."+req.url);
});

app.get('/', function(req, res){
	res.sendfile('page.html');	
});


app.listen(3000);

io.on('connection', function (client) {
  client.emit('news', { hello: 'world' });
  client.on('my other event', function (data) {
    console.log(data);
  });
});

