$(function() {
	//Load le header de la page
	$('body').prepend('<header id="banner"></header>');
	$('header').load( "includes/header.html");
	//Et le footer
	$('body').append('<footer></footer>');
	$('footer').load( "includes/footer.html");
});
