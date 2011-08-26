$(function(){

	var grid =[],
			width = 300,
			height = 100,
			fontSize = width <= height ? width/3 : height/3,
			paper = Raphael("raphael",width,height);	
	
	now.commitSquare =function(type, id) {
		for (var i =0; i<grid.length; i++) {
		  if(grid[i].id === id){
		  	if (grid[i].played === false) {
		  		grid[i].played=true;
			  	paper.text(
					  		grid[i].getBBox().x+width/6,
					  		grid[i].getBBox().y+height/6,
					  		type
			  			)
			  			.attr({ "font-size": fontSize});
	  			};
			};
		}
	};
	
	(function drawGrid (){
		var 
			rect;
			
		for(var i =0; i< width; i+=width/3){
			for(var j =0; j< height; j+=height/3){
				rect = paper.rect(i, j,width/3,height/3);
				rect.attr("stroke","black");
				rect.attr("fill","white");
				rect.played = false;
				console.log(rect.id);
				$(rect.node).click(function(evt){
					console.log(evt.currentTarget.raphael.id);
					now.clicked(evt.currentTarget.raphael.id);
					});
				grid.push(rect);		
			}
		}
	})();

});	


