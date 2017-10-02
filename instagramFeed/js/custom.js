$(document).ready(function(){

var userFeed =new Instafeed({
	get:'user',
	userId:'449898857',
	limit:'1',
	resolution:'standard_resolution',
	accessToken:'449898857.1677ed0.cf1cba9ecf7e4bdb9eac7db3e96b2892',
	sortBy:'most-recent',
	template: '<div class="gallery"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
});
userFeed.run();


});