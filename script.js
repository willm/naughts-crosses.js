$(function(){
now.colorSwitch = function changeColor(color){
	console.log(color);
	$('#box').css('background-color', color);
}
$('#box').click(function(){now.clicked();});
});
