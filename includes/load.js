$(function() {
	//Load le header de la page
	$('.parallaxContainer').prepend('<header id="banner"></header>');
	$('header').load( "includes/header.html", function() {
			$('.imageBand').css('transform-origin', '0px -'+$('#banner').outerHeight()+'px');
	});

	//Et le footer
	$('.parallaxContainer').append('<footer></footer>');
	$('footer').load( "includes/footer.html");
});
