$(function(){

	var grid =[];	
	
	now.colorSwitch = function changeColor(color,id){
		console.log(color);
		$('#'+id).css('background-color', color);
	};
	
	now.colorSwitchR =function(color, id) {
	console.log("hi" + id);
		for (var i =0; i<grid.length; i++) {
		  if(grid[i].node.id === id){
		  	grid[i].attr("fill", color);
		  };
		}
	};
	
	$('.box').click(function(evt){
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
				rect.attr("fill","white");
				$(rect.node).attr("id", i+":"+j);
				console.log(rect.node);
				grid.push(rect);
				$(rect.node).click(function(evt){
					console.log(evt.currentTarget.id);
					now.clickedR(evt.currentTarget.id);
					});	
								
			}
		}
	})();

});	


