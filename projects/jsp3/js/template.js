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
	/* SLIDES/FRAMES */
	/* SLIDE/FRAME START */
	function frameStart(){

		$('#navPart1').css({'background-color':'yellow', 'color':'blue'});
		$('#cap1').stop().animate({'left':'455px','top':'300px'}, 1500, 'swing');
		$('#cap2').stop().animate({'left':'450px','top':'350px'}, 1500, 'swing');
		$('#cap19').stop().animate({'left':'-80px','top':'800px'}, 1500, 'swing');
		$('#start').stop().animate({'left':'670px','top':'450px'}, 1500, 'swing');
		setTimeout(function(){
			$('#start').show();
		}, 2500);
		$('#start').on('click', function(){
			$('#start').off('click');
			$('#start').stop().hide();
			document.getElementById('click').play();
			$('.captions').stop().animate({'bottom':'-100px','left':'-101%'},1500,'swing');
			frameOne();
		});
	};
	/* SLIDE/FRAME 1 */
	function frameOne(){
		$('#tallgrass').stop().animate({'left':'940px','bottom':'35%'}, 1500, 'swing');
		$('#cap3').stop().animate({'left':'800px','top':'600px'}, 1500, 'swing');
		$('#hero, #umby').stop().animate({'left':'300px'}, 2500, 'swing');
		setTimeout(function(){
			hoverThisH('#tallgrass',10,250);
			$('#cap4').stop().animate({'left':'800px','top':'800px'}, 1500, 'swing');
			$('#tallgrass').on('click',function(){
				$('#tallgrass').off('click');
				document.getElementById('click').play();
				document.getElementById('tut').pause();
				document.getElementById('vs').play();
				$('.objDown').stop().animate({'bottom':'-101%'},1500,'swing');
				frameTwo();
			});
		}, 2500);		

	};
	/* SLIDE/FRAME 2 */
	function frameTwo(){
		$('#navPart1').css({'background-color':'blue', 'color':'yellow'});
		$('#navPart2').css({'background-color':'yellow', 'color':'blue'});
		$('#patch2').stop().animate({'right':'20px'},1500, 'swing');
		$('#teddy, #redteddy').stop().animate({'right':'170px'},1500, 'swing');
		$('.captions').stop().animate({'bottom':'-100px','left':'-101%'},1500,'swing');
		$('#teddy').effect('bounce',{times:1},500);
		$('#cap5').stop().animate({'left':'800px','top':'600px'}, 1500, 'swing');
		setTimeout(function(){
			document.getElementById('teddycry').play();
			$('#cap6').stop().animate({'left':'800px','top':'650px'}, 1500, 'swing');
			setTimeout(function(){
			$('#cap7').stop().animate({'left':'800px','top':'800px'}, 1500, 'swing');
			hoverThisV('#umby',10,250);
			$('#umby').on('click', function(){
				$('#umby').off('click');
				document.getElementById('click').play();
				$('#hero, #umby').stop().animate({'left':'-101%'},2500,'swing');
				$('#patch1').stop().animate({'left':'30px'},1500,'swing');
				$('#umby').stop().animate({'left':'-20px'},1500,'swing');
				setTimeout(function(){
					$('#umby').stop().animate({'top':'350px','left':'110px'},500,'swing');
					document.getElementById('umbycry').play();
					frameThree();
				}, 2500);
			});
			}, 2500);
		}, 1500);
	};
	/* SLIDE/FRAME 3 */
	function frameThree(){
		$('#navPart2').css({'background-color':'blue', 'color':'yellow'});
		$('#navPart3').css({'background-color':'yellow', 'color':'blue'});
		$('.captions').stop().animate({'bottom':'-100px','left':'-101%'},1500,'swing');
		$('#cap8').stop().animate({'left':'800px','top':'600px'}, 1500, 'swing');
		setTimeout(function(){
			$('#cap9').stop().animate({'left':'800px','top':'800px'}, 1500, 'swing');
			hoverThisV('#teddy',10,250);
			$('#teddy').on('click', function(){
				$('#teddy').off('click');
				document.getElementById('click').play();
				$('#teddy').stop().animate({'right':'170px'},1500, 'swing');
				$('#attack').show();
				$('#umby').effect('bounce',{times:1},500);
				$('#attack').stop().animate({'top':'200px','left':'1000px'},800,'easeOutExpo');
				document.getElementById('dark').play();
				setTimeout(function(){
					$('#attack').stop().hide();
					document.getElementById('ouch').play();
					document.getElementById('ouch').play();
					damage();
					$('.captions').stop().animate({'bottom':'-100px','left':'-101%'},1500,'swing');
					$('#cap10').stop().animate({'left':'800px','top':'600px'}, 1500, 'swing');
					$('#cap11').stop().animate({'left':'800px','top':'700px'}, 1500, 'swing');
					setTimeout(function(){
						$('#cap12').stop().animate({'left':'800px','top':'800px'}, 1500, 'swing');
						hoverThisH('#teddy',10,250);
						$('#teddy').on('click', function(){
							$('#teddy').off('click');
							document.getElementById('click').play();
							document.getElementById('vs').pause();
							frameFour();
						});
					}, 1000);
				}, 1000);
			});
		}, 1500);	
	};

	/* SLIDE/FRAME 4 */

	function frameFour(){
		$('#navPart3').css({'background-color':'blue', 'color':'yellow'});
		$('#navPart4').css({'background-color':'yellow', 'color':'blue'});
		$('#pokeball').stop().animate({'top':'100','left':'985'},500,'linear');
		document.getElementById('throw').play();
			setTimeout(function(){
				$('#redteddy').show();
				$('#teddy').stop().hide();
				document.getElementById('fall').play();
				setTimeout(function(){
					$('#redteddy').stop().animate({'scale':'-1.25', 'rotate': '270deg','left':'790px','top':'40px'},2000,'swing');
					setTimeout(function(){
						$('#redteddy').stop().hide();
						$('#pokeball').stop().animate({'top':'300px'}, 500, 'easeOutBounce');
						document.getElementById('fall').play();
						setTimeout(function(){
							$('.captions').stop().animate({'bottom':'-100px','left':'-101%'},1500,'swing');
							//document.getElementById('vs').pause();	// ORIGINAL SONG END										
							ballSpin();
							setTimeout(function(){
								$('#cap15').stop().animate({'left':'800px','top':'800px'}, 1500, 'swing');
								document.getElementById('win').play();
								$('#pokeball').on('click', function(){
									$('#pokeball').off('click');
									$('#pokeball').delay(1000).fadeOut(500);
									frameFive();
								});
							}, 4000);
					}, 1000);
				}, 1000);
			}, 1000);
		}, 800);
	};

	function frameFive(){
		$('.objLeft').stop().animate({'left':'-101%'},1500,'swing');
		$('.objRight').stop().animate({'right':'-101%'},1500,'swing');
		$('.objDown').stop().animate({'bottom':'-101%'},1500,'swing');
		$('.captions').stop().animate({'bottom':'-100px','left':'-101%'},1500,'swing');
		$('#navPart4').css({'background-color':'blue', 'color':'yellow'});
		$('#navPart5').css({'background-color':'yellow', 'color':'blue'});
		setTimeout(function(){
			$('#hero2').stop().animate({'top':'100px'}, 1500, 'swing');
			$('#umby2').stop().animate({'top':'500px'}, 1500, 'swing');
			setTimeout(function(){
				hoverThisV('#umby2',10,250);
				$('#cap16').stop().animate({'left':'900px','top':'600px'}, 1500, 'swing');
				setTimeout(function(){
					$('#cap17').stop().animate({'left':'1100px','top':'800px'}, 1500, 'swing');
					$('#restart').stop().animate({'left':'1100px','top':'350px'}, 1500, 'swing');
					setTimeout(function(){
						$('#restart').show();
					}, 2500);
					$('#restart').on('click', function(){
						$('#restart').off('click');
						$('#restart').stop().hide();
						document.getElementById('click').play();
						$('#cap18').stop().animate({'left':'0px','top':'0px'}, 1500, 'swing');
						setTimeout(function(){
							$('#cap18').show();
							setTimeout(function(){
								window.location.reload(true);
							}, 5000);
						}, 2100);
					});
				}, 2000);
			}, 1500);
		}, 1000);
	};
	

	/* DAMAGE CALL */
	function damage(){
		setTimeout(function(){
			$('#teddy').stop().hide();
			setTimeout(function(){
				$('#teddy').show();
				setTimeout(function(){
					$('#teddy').stop().hide();
					setTimeout(function(){
						$('#teddy').show();
					},250);
				},250);
			},250);
		},250);
	};

	/* POKEBALL SPIN */
	function ballSpin(){
		document.getElementById('twitch').play();
		$('#pokeball').animate({'rotate':'15deg'}, 500);
		$('#pokeball').animate({'rotate':'-30deg'}, 600);
		$('#pokeball').animate({'rotate':'30deg'}, 600);
		$('#pokeball').animate({'rotate':'-30deg'}, 600);
		$('#pokeball').animate({'rotate':'30deg'}, 600);
		$('#pokeball').animate({'rotate':'-15deg'},500);
		setTimeout(function(){
			document.getElementById('twitch').pause();
			document.getElementById('gotcha').play();
			$('#cap13').stop().animate({'left':'800px','top':'600px'}, 1500, 'swing');
			$('#cap14').stop().animate({'left':'800px','top':'700px'}, 1500, 'swing');
		},3500);
	};

	/* RESET */

	/* QUICK-RESET */
	/*function reset(){
		$('.objLeft').stop().animate({'left':'-101%'},1500,'swing');
		$('.objRight').stop().animate({'right':'-101%'},1500,'swing');
		$('.objDown').stop().animate({'bottom':'-101%'},1500,'swing');
		$('.captions').stop().animate({'bottom':'-100px','left':'-101%'},1500,'swing');
	};*/

	/* THE CALL */
	document.getElementById('tut').play();
	frameStart();
	/* HOVER FUNCTION */
	function hoverThisH(target,distance,speed){
		$(target).stop().animate({'left':'-='+distance+'px'},speed,'swing',function(){
			$(target).stop().animate({'left':'+='+distance+'px'},speed,'swing',function(){
				hoverThisH(target,distance,speed);
			});
		});
	};
	function hoverThisV(target,distance,speed){
		$(target).stop().animate({'top':'-='+distance+'px'},speed,'swing',function(){
			$(target).stop().animate({'top':'+='+distance+'px'},speed,'swing',function(){
				hoverThisV(target,distance,speed);
			});
		});
	};
});

