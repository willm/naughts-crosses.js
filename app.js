var app = require('express').createServer(),
	nowjs = require("now"),
	everyone = nowjs.initialize(app),
	types= ["X","0"];

require('jade');
app.set('view options', {layout: false});

app.get('/*.(js|css)', function(req, res){
  res.sendfile("."+req.url);
});

app.get('/', function(req, res){
	res.sendfile('page.html');	
});

app.listen(3000);

everyone.now.clickedR = function (id) {
  	everyone.now.colorSwitchR(types[0],id);	
	types.reverse();
    	console.log(types[0]);
};
