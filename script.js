$(document).ready(
			
			function()
			{
						
			}
		);
		
		var colors = ['green','red'];
		
		function changeColor(){
			$('#box').css('background-color', colors[0]);
			colors = colors.reverse();
		}
		

var socket = io.connect('http://localhost');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });

