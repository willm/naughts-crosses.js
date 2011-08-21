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
		

var socket = io.connect();
  socket.on('mess', function (mess) {
    console.log(mess);
    changeColor();
  });

