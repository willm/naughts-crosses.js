$(function(){

	var grid =[];	
	
	now.colorSwitch = function changeColor(color,id){
		console.log(color);
		$('#'+id).css('background-color', color);
	};
	$('.box').click(function(evt){
					console.log(evt.currentTarget.id);
					now.clicked(evt.currentTarget.id);
					});	
	
	(function raphaelVersion (){
		var width = 300,
			height = 300,
			rect,
			paper = Raphael("raphael",width,height);
			
		for(var i =0; i< width; i+=100){
			for(var j =0; j< height; j+=100){
				rect = paper.rect(i, j,200,200);
				rect.attr("stroke","black");
				rect.node.onclick=function(){cross();};
				grid.push(rect);
				
			}
		}
		console.log(grid[0]);
		console.log(grid[4].attrs);
	})();
});
	
	function cross(){
		  console.log("hi");
	}



