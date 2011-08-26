$(function(){

	var grid =[],
			width = 300,
			height = 300,
			paper = Raphael("raphael",width,height);	
	
	now.colorSwitchR =function(type, id) {
	console.log(type);
		for (var i =0; i<grid.length; i++) {
		  if(grid[i].node.id === id){
		  	console.log(grid[i].getBBox().x);
		  	paper.text(
				  		grid[i].getBBox().x+50,
				  		grid[i].getBBox().y+50,
				  		type
		  			)
		  			.attr({ "font-size": 100});
		  };
		}
	};
	
	(function raphaelVersion (){
		var 
			rect;
			
		for(var i =0; i< width; i+=100){
			for(var j =0; j< height; j+=100){
				rect = paper.rect(i, j,200,200);
				rect.attr("stroke","black");
				rect.attr("fill","white");
				console.log(rect.id);
				rect.node.id = i+":"+j;//unique id for each square
				$(rect.node).click(function(evt){
					console.log(evt.currentTarget.id);
					now.clickedR(evt.currentTarget.id);
					});
				grid.push(rect);		
			}
		}
	})();

});	


