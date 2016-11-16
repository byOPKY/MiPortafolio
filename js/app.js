$(document).ready(function(){
	
	$(".fixed-action-btn").openFAB();
	$(".fixed-action-btn").closeFAB();

	$("#nombres").fadeIn(3000);
   
  	$('.collapsible').collapsible({
      accordion: true, 
      onOpen: function(el) { alert('Open'); }, 
      onClose: function(el) { alert('Closed');} 
 	 });


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
			backgroundPositionY:"+=550px"
		}, 0);
		cohete.animate({
			backgroundPositionY:"-=100px"
		}, 2000);
		cohete.animate({
			backgroundPositionY:"-=450px"
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
	var firstAnimation = function(){			
    $(".card-panel:eq(0)").delay(1000).animate({opacity:1},"slow");
    $(".card-panel:eq(1)").delay(2000).animate({opacity:1},"slow");
    $(".card-panel:eq(2)").delay(3000).animate({opacity:1},"slow");
    $(".card-panel:eq(3)").delay(4000).animate({opacity:1},"slow");
    $(".card-panel:eq(4)").delay(5000).animate({opacity:1},"slow");
    $(".card-panel:eq(5)").delay(6000).animate({opacity:1},"slow");
    $(".card-panel:eq(6)").delay(7000).animate({opacity:1},"slow");
    $(".card-panel:eq(7)").delay(8000).animate({opacity:1},"slow");
	}
	$(window).scroll(function(){
	  var windowWidth = $(this).width();
	  var windowHeight = $(this).height();
	  var windowScrollTop = $(this).scrollTop();
	  	if(windowScrollTop>550){
		       firstAnimation()
		    }
	  	if(windowWidth>849){
		    if(windowScrollTop>1450){
		       secondAnimation();
		    }
		    if(windowScrollTop>1250){
		       thirdAnimation()
		    }
		}
		if(windowWidth<=849){
		    if(windowScrollTop>2850){
		       secondAnimation();
		    }
		    if(windowScrollTop>2650){
		       thirdAnimation()
		    }
		}
	    if(windowWidth<=549){
		    if(windowScrollTop>3150){
	       		thirdAnimation()
	    	}
	    	if(windowScrollTop>3750) {
		    	fourthAnimation();
		    }
		}
	});

	var secondAnimation = function(){
		$("#mySelf .card-panel:eq(0)").delay(1000).animate({opacity:1, right:0},"slow");
    	$("#mySelf .card-panel:eq(1)").delay(2000).animate({opacity:1, right:0},"slow");
	}
	var thirdAnimation = function(){
		$("#mySelf p:eq(0)").delay(1000).animate({opacity:1, left:0},"slow");
    	$("#mySelf p:eq(1)").delay(2000).animate({opacity:1, left:0},"slow");
    	$("#mySelf p:eq(2)").delay(3000).animate({opacity:1, left:0},"slow");
    	$("#mySelf p:eq(3)").delay(1000).animate({opacity:1, left:0},"slow");
    	$("#mySelf p:eq(4)").delay(2000).animate({opacity:1, left:0},"slow");
    	$("#mySelf p:eq(5)").delay(3000).animate({opacity:1, left:0},"slow");
	}
	var fourthAnimation = function(){
		$("#none .circle:eq(0)").delay(1000).animate({opacity:1, right:0},"slow");
    	$("#none .circle:eq(1)").delay(2000).animate({opacity:1, right:0},"slow");
    	$("#none .circle:eq(2)").delay(3000).animate({opacity:1, right:0},"slow");
    	$("#none .circle:eq(3)").delay(4000).animate({opacity:1, right:0},"slow");
    	$("#none .circle:eq(4)").delay(5000).animate({opacity:1, right:0},"slow");
    	$("#none .circle:eq(5)").delay(6000).animate({opacity:1, right:0},"slow");
	}


});
/*$(".valign-wrapper").mouseover(function(){
        $(".valign-wrapper").css("width", "lightgray");
    });*/