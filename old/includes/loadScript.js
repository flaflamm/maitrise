function header(c) {
	//Peut être appelée avec un paramètre 'small' ou 'large' pour animer le changement de type
	//ou sans paramètre pour recalculer les dimensions (resize) sans animation.
  if(c=='small') {$('header').addClass('small');}
	else if(c=='large') {$('header').removeClass('small');}

	if($('header').hasClass('small')) { //Définit les dimensions pour le small header
		var w = $( window ).width()/840;
		var hHeight = 116, iHeight = 66, hPadding = 20, hFontSize = 44, hWidth = 660, hLeft = 70, hBorder = 180, mWidth = 42, mPadding = 20;
	}
	else { //Définit les dimensions pour le header complet
		var w = $( window ).width()/640;
		var hHeight = 216, iHeight = 150, hPadding = 20, hFontSize = 54, hWidth = 540, hLeft = 140, hBorder = 180, mWidth = 50, mPadding = 35;
	}

	if(w<1) { //Modifie les dimensions en fonction de la largeur de l'écran
		hHeight *= w;
		iHeight *= w;
		hPadding *= w;
		hFontSize *= w;
		hWidth *= w;
		hLeft *= w;
		hBorder *= w;
		mWidth *= w;
		mPadding *= w;
	}

	if(typeof c == 'undefined') {
		$("header").css({"height": hHeight});
		$("header img").css({"left": hPadding, "height": iHeight});
		$("header h1").css({"fontSize": hFontSize, "width": hWidth, "left": hLeft+20});
		$("main").css({"borderTopWidth": hBorder});
		$(".container h2").css({"top": hHeight});
		$("header .menu").css({"width": mWidth, "padding-top": mPadding});
	}
	else {
		$("header").stop().animate({height:hHeight});
		$("header img").stop().animate({"left": hPadding, "height": iHeight});
	  $("header h1").stop().animate({fontSize:hFontSize, width: hWidth, left:hLeft+20});
    $("main").stop().animate({borderTopWidth: hBorder});
		$(".container h2").css({"top": hHeight});
		$("header .menu").stop().animate({width:mWidth, "padding-top": mPadding});
	}
}


$(function() {
	//Load le header de la page
	$('body').prepend('<header></header>');
	$('header').load( "includes/header.html", function(){header()} );
	//Et le footer
	$('body').append('<footer></footer>');
	$('footer').load( "includes/footer.html");




	//Exécution des fonctions permettant de changer le header lors d'un resize ou d'un scrolling.
	$(window).resize(function() { header(); });

	function scrolling()  {
		var scroll= ($(window).scrollTop()>0);
    if(scroll && !$("header").hasClass('small')) { header('small'); $("#PetitsChanteurs2009").addClass("opened"); }
		if(!scroll && $("header").hasClass('small')) { header('large'); $("#PetitsChanteurs2009").removeClass("opened"); }
		requestAnimationFrame(scrolling);
	}

	requestAnimationFrame(scrolling);
});
