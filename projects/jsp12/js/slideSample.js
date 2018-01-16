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
	var maxSlides = 5;
	$('#slide1').css({left: '0px'});
	$('#cap1').css({left: '50px'});
	$('#dot1').css('background-image', 'url("images/pokeball.png")');
	$('#dot2').css('background-image', 'url("images/pokeball2.png")');
	$('#dot3').css('background-image', 'url("images/pokeball2.png")');
	$('#dot4').css('background-image', 'url("images/pokeball2.png")');
	$('#dot5').css('background-image', 'url("images/pokeball2.png")');
	// setTimeout(function, duration); 
	// setInterval(function, duration);
	function nextSlide(){
		$('#rightArrow').off('click');
		$('#leftArrow').off('click');
		console.log('function works!');
		if(slideNum==maxSlides){
			slideNum = 1;
		} else {
			slideNum++;
		};
		$('#dotNav li').css('background-image', 'url("images/pokeball2.png")');
		$('#dot'+slideNum).css('background-image', 'url("images/pokeball.png")');
		$('.slide, .caption').css({'z-index':10});
		$('#slide'+slideNum).css({'z-index':20}).animate({left: '0px'}, 1000, 'swing');
		$('#cap'+slideNum).css({'z-index':30}).animate({left: '5%'}, 1500, 'easeOutBounce', function(){
				$('.slide, .caption').css({left: '641px'});
				$('#slide'+slideNum).css({left: '0px'});
				$('#cap'+slideNum).css({left: '5%'});
				$('#dotNav li').off('click');
				$('#rightArrow').on('click', nextSlide);
				$('#leftArrow').on('click', backSlide);
				$('#dotNav li').on('click', navClick);
		});
		
	};
	var myTimer = setInterval(nextSlide, 4500);
	$('#dotNav li').on('click', navClick);
	function navClick(event){
		$('#dotNav li').off('click');
		var myName = $(this).attr('id');
		var myNum = parseInt(myName.substring(myName.length-1,myName.length),10);
		console.log(myNum);
		myNum--;
		slideNum = myNum;
		nextSlide();
		clearInterval(myTimer);
	};
	$('#slider').hover(function(){
		clearInterval(myTimer);
	}, function(){
		myTimer = setInterval(nextSlide, 4500);
	});
	$('#dotNav li').hover(function(){
		$(this).css('background-image', 'url("images/pokeball.png")');
	}, function(){
		$(this).css('background-image', 'url("images/pokeball2.png")');
	});

	/* ARROWS */

	$('#rightArrow').on('click', nextSlide);
	$('#leftArrow').on('click', backSlide);
	function backSlide(){
		clearInterval(myTimer);
		if(slideNum==1){
			slideNum = maxSlides-1;
		} else {
			slideNum -= 2;
		};
		nextSlide();
	};

	/* FORM */


	$('#jForm').validate({
			rules: {
				element_1: {
					required: true,
					minlength: 2,
					maxlength: 8,
					lettersonly: true
				},
				element_2: {
					required: true,
					rangelength: [12, 12],
					integer: true
				},
				element_3: {
					required: true,
					minlength: 1,
					maxlength: 12
				},
				element_4: {
					required: true
				},
				element_5: {
					required: true
				},
				element_7: {
					required: true
				},
				element_8: {
					required: true
				},
				element_12: {
					maxlength: 500
				},
				element_13: {
					required: true,
					email: true
				},
				element_14: {
					required: true,
					email: true,
					equalTo: "#element_13"
				},
				q: {
					required: true
				}
			}, //end rules
			messages: {
				element_1: {
					required: 'This field is required',
					minlength: 'Minimum of 2 letters',
					maxlength: 'Maximum of 8 letters',
					lettersonly: 'Only use letters'
				},
				element_2: {
					required: 'This field is required',
					rangelength: 'Exactly 12 digits',
					integer: 'Only use numbers'
				},
				element_3: {
					required: 'This field is required',
					minlength: 'Minimum of 1 letter',
					maxlength: 'Maximum of 12 letters'
				},
				element_4: {
					required: 'This field is required'
				},
				element_5: {
					required: 'This field is required'
				},
				element_7: {
					required: 'This field is required'
				},
				element_8: {
					required: 'This field is required'
				},
				element_12: {
					maxlength: 'No more than 100 letters'
				},
				element_13: {
					required: 'This field is required',
					email: 'Insert valid Email'
				},
				element_14: {
					required: 'This field is required',
					email: 'Insert valid Email',
					equalTo: 'This email is different to the one inserted above'
				},
				q: {
					required: 'This field is required'
				}
			}, //end messages
			errorPlacement: function(error, element) {
				error.insertAfter(element);
			} // end error placement
		}); //end validate
}); //end ready