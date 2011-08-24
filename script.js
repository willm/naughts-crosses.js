$(function(){
now.colorSwitch = function changeColor(color,id){
	console.log(color);
	$('#'+id).css('background-color', color);
}
$('.box').click(function(evt){
				console.log(evt.currentTarget.id);
				now.clicked(evt.currentTarget.id);
				});
});
