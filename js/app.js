$(document).ready(function(){
	
	$(".fixed-action-btn").openFAB();
	$(".fixed-action-btn").closeFAB();

	$("#nombres").fadeOut(3000).fadeIn(6000);

	start();
	move();
	shake();
	up();
	jump();

	function start () {
		var devep = $("#developer");
		devep.animate({
			letterSpacing:"+=5px"
		}, "slow");
		devep.animate({
			letterSpacing:"+=2px"
		}, "slow");
		devep.animate({
			letterSpacing:"-=5px"
		}, "slow");
		devep.animate({
			letterSpacing:"-=2px"
		}, "slow", start);
	}

	function move () {
		var nave = $("#nave");
		nave.animate({
			backgroundPositionX:"+=150px"
		}, 3000);
		nave.animate({
			backgroundPositionX:"+=350px"
		}, 2000);
		nave.animate({
			backgroundPositionX:"-=150px"
		}, 2000);
		nave.animate({
			backgroundPositionX:"-=350px"
		}, 3000, move);
	}
	
	function shake () {
		var marciano = $("#ovni");
		marciano.animate({
			backgroundPositionX:"+=180px"
		}, 4000);
		marciano.animate({
			backgroundPositionX:"+=480px"
		}, 5000);
		marciano.animate({
			backgroundPositionX:"-=180px"
		}, 4000);
		marciano.animate({
			backgroundPositionX:"-=480px"
		}, 5000, shake);
	}
	
	function up () {
		var cohete = $("#cohete");
		cohete.animate({
			backgroundPositionY:"+=650px"
		}, 0);
		cohete.animate({
			backgroundPositionY:"-=100px"
		}, 2000);
		cohete.animate({
			backgroundPositionY:"-=550px"
		}, 4000, up);
		
	}

	function jump () {
		var astronauta = $("#human");
		astronauta.animate({
			backgroundPositionY:"+=300px"
		}, 3000);
		astronauta.animate({
			backgroundPositionY:"-=150px"
		}, 2000);
		astronauta.animate({
			backgroundPositionY:"+=150px"
		}, 3000);
		astronauta.animate({
			backgroundPositionY:"-=350px"
		}, 2000, jump);
		astronauta.animate({
			backgroundPositionY:"+=350px"
		}, 2000);
		astronauta.animate({
			backgroundPositionY:"-=300px"
		}, 4000, jump);
		
	}

	

});
/*$(".valign-wrapper").mouseover(function(){
        $(".valign-wrapper").css("width", "lightgray");
    });*/