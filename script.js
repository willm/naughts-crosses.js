
function changeColor(color){
	$('#box').css('background-color', color);
}
		

var socket = io.connect();
  socket.on('colorSwitch', function (data) {
    console.log(data.color);
    changeColor(data.color);
  });
