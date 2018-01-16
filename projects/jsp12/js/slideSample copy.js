/*
Version: 1.0
Author: your name
Author URL: your site
License: (if other than below)
This is a FREE script and is dual licensed under the following:
http://www.opensource.org/licenses/mit-license.php | http://www.gnu.org/licenses/gpl.html
Aside from these comments, you may modify and distribute this file as you please. Have fun!
*/
$(document).ready(function(){
	/*$('p').animate({top: '20%', left: '20%'}, 1000, 'swing');
	var myString = 'hello ';
	var myNum = 7;
	var myBoolean = false;
	var myNum2 = 5;
	var result = myNum + myNum2;
	console.log(result);

	var myNum = 7;
	var myNum2 = myNum+=5;
	var result = myNum + myNum2;
	myNum = myNum+='Gary';
	console.log(result);

	if(myBoolean==true){
		$('p').animate({top: '50%', left: '50%'}, 1000, 'swing');
	} else {
		$('p').animate({top: '90%', left: '90%'}, 1000, 'swing');
		$('p').animate({top: '50%', left: '50%'}, 1000, 'swing');
		$('p').animate({top: '90%', left: '90%'}, 1000, 'swing');
		$('p').animate({top: '-20%', left: '30%'}, 1000, 'swing');
		$('p').animate({top: '50%', left: '-50%'}, 1000, 'swing');
		$('p').animate({top: '90%', left: '80%'}, 1000, 'swing');
	}
	console.log(myBoolean);

	var myArray = ['hello', 7, false, result];
	var myNode = myArray[0];
	*/

	var slideNum = 1;
	$('#slide1').css({left: '0px'});
	$('#cap1').css({left: '50px'});
	$('#dot1').css({backgroundColor: 'yellow'});
	// setTimeout(function, duration); 
	// setInterval(function, duration);
	function nextSlide(){
		console.log('function works!');
		if(slideNum==1){
			$('#dotNav li').css({backgroundColor: 'blue'});
			$('#dot1').css({backgroundColor: 'yellow'});
				$('.slide, .caption').css({'z-index':10});
				$('#slide2').css({'z-index':20}).animate({left: '0px'}, 1500, 'swing');
				$('#cap2').css({'z-index':30}).animate({left: '50px'}, 2500, 'easeOutBounce', function(){
				$('.slide, .caption').css({left: '641px'});
				$('#slide2').css({left: '0px'});
				$('#cap2').css({left: '50px'});
				slideNum = 2;
			});
		} else if(slideNum==2){

			$('#dotNav li').css({backgroundColor: 'blue'});
			$('#dot2').css({backgroundColor: 'yellow'});
				$('#slide3').animate({left: '0px'}, 1500, 'swing');
				$('#cap3').animate({left: '50px'}, 2500, 'easeOutBounce', function(){
				$('.slide, .caption').css({left: '641px'});
				$('#slide3').css({left: '0px'});
				$('#cap3').css({left: '50px'});
				slideNum = 3;
			});
		} else {

			$('#dotNav li').css({backgroundColor: 'blue'});
			$('#dot3').css({backgroundColor: 'yellow'});
				$('#slide1').animate({left: '0px'}, 1500, 'swing');
				$('#cap1').animate({left: '50px'}, 2500, 'easeOutBounce', function(){
				$('.slide, .caption').css({left: '641px'});
				$('#slide1').css({left: '0px'});
				$('#cap1').css({left: '50px'});
				slideNum = 1;
		});
	};
};
	var myTimer = setInterval(nextSlide, 2000);
	$('#dot1').on('click', function(){
		slideNum = 3;
		nextSlide();
		clearInterval(myTimer);
	});
	$('#dot2').on('click', function(){
		slideNum = 1;
		nextSlide();
		clearInterval(myTimer);
	});
	$('#dot3').on('click', function(){
		slideNum = 2;
		nextSlide();
		clearInterval(myTimer);
	});
	$('#slider').hover(function(){
		clearInterval(myTimer);
	}, function(){
		myTimer = setInterval(nextSlide, 2000);
	});

});

