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
