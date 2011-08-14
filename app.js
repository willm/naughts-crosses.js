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

  client.on('save it', function(data){
    //save the data
    var result = false;
    console.log('data saved? => ' + result);

    client.emit('saved some data');
    client.broadcast.emit('someone saved some data');
  });

  client.on('disconnect', function(){clientDisconnect(client)});
}); 

function clientDisconnect(client){
  activeClients -=1;
  client.broadcast({clients:activeClients})
}

app.listen(3000);
