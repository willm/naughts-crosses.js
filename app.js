var app = require('express').createServer(),
	nowjs = require("now"),
	everyone = nowjs.initialize(app),
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

everyone.now.clicked = function (id) {
  	everyone.now.colorSwitch(colors[0],id);	
	colors.reverse();
    	console.log(colors[0]);
};

everyone.now.clickedR = function (id) {
  	everyone.now.colorSwitchR(colors[0],id);	
	colors.reverse();
    	console.log(colors[0]);
};
