var app = require('express').createServer();
var socket = require('socket.io').listen(app);

require('jade');
//app.set('view engine', 'jade');
app.set('view options', {layout: false});

app.get('/*.(js|css)', function(req, res){
  res.sendfile("."+req.url);
});

app.get('/', function(req, res){
	res.sendfile('page.html');	
});

var activeClients = 0;

socket.on('connection', function(client){ 
  activeClients +=1;
  console.log(activeClients);
  socket.broadcast({clients:activeClients})
  client.on('disconnect', function(){clientDisconnect(client)});
}); 

function clientDisconnect(client){
  activeClients -=1;
  client.broadcast({clients:activeClients})
}

app.listen(3000);
