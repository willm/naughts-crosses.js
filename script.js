$(document).ready(
			
			function()
			{
				  $clientCounter = $("#client_count")

				  var socket = new io.Socket(null, {port: 3000});
				  socket.connect();
				  socket.on('message', function(msg){msgReceived(msg)});			
			}
		);
		
		var colors = ['green','red'];
		
		function changeColor(){
			$('#box').css('background-color', colors[0]);
			colors = colors.reverse();
		}
		
		function msgReceived(msg){
		  $clientCounter.html(msg.clients);
		}

