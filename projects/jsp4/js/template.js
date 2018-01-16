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
	var x = document.getElementById('song');
	x.loop = true;
	x.load();
	document.getElementById('song').play();
// Draggable Functions - start
	var zoomIn = true;
	/*$('.highlight').draggable();*/
	function minPos(){
		var mgT = $('#mapGroup').css('top').substring(0, $('#mapGroup').css('top').length-2);
		var mgL = $('#mapGroup').css('left').substring(0, $('#mapGroup').css('left').length-2);
		var mgH = $('#mapGroup').css('height').substring(0, $('#mapGroup').css('height').length-2);
		var mgW = $('#mapGroup').css('width').substring(0, $('#mapGroup').css('width').length-2);
		offsetT = (mgT/mgH)*-242;
		offsetL = (mgL/mgW)*-200;
		$('#mmSite').css({'top':offsetT,'left':offsetL});
	};
	$('#mapGroup').draggable({
		drag: function(){
			minPos();
		},
		stop: function() {
        	repMap();
        }
     });
	 $('#mmSite').draggable({
		drag: function(){
			var mgT = $('#mmSite').css('top').substring(0, $('#mmSite').css('top').length-2);
			var mgL = $('#mmSite').css('left').substring(0, $('#mmSite').css('left').length-2);
			var mgH = $('#minMap img').css('height').substring(0, $('#minMap img').css('height').length-2);
			var mgW = $('#minMap img').css('width').substring(0, $('#minMap img').css('width').length-2);
			if(zoomIn){
				offsetT = (mgT/mgH)*-2420;
				offsetL = (mgL/mgW)*-2000;
			} else {
				offsetT = (mgT/mgH)*-1210;
				offsetL = (mgL/mgW)*-1000;
			};
			$('#mapGroup').css({'top':offsetT,'left':offsetL});
		},
		stop: function() {
        	repMap();
        }
     });
	$('#mapGroup').on( "mousedown", function(){
		$('#mapGroup').stop();
	});
	// ALL THINGS ZOOM
	/*$('#mapGroup').on('dblclick',zoom);
	function zoom(){
		var mgH = $('#mapGroup').css('height').substring(0, $('#mapGroup').css('height').length-2);
		var mgW = $('#mapGroup').css('width').substring(0, $('#mapGroup').css('width').length-2);
		console.log(mgH+"  "+mgW);
		if(zoomIn){
			mgH = mgH/2;
			mgW = mgW/2;
			$('#mapGroup').css({'height' : mgH, 'width': mgW});
			zoomIn = false;
			$('#theMap').css({'height': mgH, 'width': mgW});
			$('.highlight').css({'height': '22px', 'width': '22px', 'border-radius': '7px'});
			$('.highlight').each(function(){
				var myT = $(this).css('top').substring(0, $(this).css('top').length-2);
				var myL = $(this).css('left').substring(0, $(this).css('left').length-2);
				myT = myT/2;
				myL = myL/2;
				$(this).css({'top':myT,'left':myL});				
			});
			$(window).trigger('resize');
		} else {
			mgH = mgH*2;
			mgW = mgW*2;
			$('#mapGroup').css({'height' : mgH, 'width': mgW});
			zoomIn = true;
			$('#theMap').css({'height': mgH, 'width': mgW});
			$('.highlight').css({'height': '44px', 'width': '44px', 'border-radius': '15px'});
			$('.highlight').each(function(){
				var myT = $(this).css('top').substring(0, $(this).css('top').length-2);
				var myL = $(this).css('left').substring(0, $(this).css('left').length-2);
				myT = myT*2;
				myL = myL*2;
				$(this).css({'top':myT,'left':myL});				
			});
			$(window).trigger('resize');
		};
	};
	// END ZOOM*/
	var bottomBind;
	var rightBind;
	$(window).resize(function(){
		getDimensions();
		repMap();
	});
	function getDimensions(){
		var winW = $(window).width();
		var mapW = $('#theMap').width();
		rightBind = (mapW - winW)*-1;
		var winH = $(window).height();
		var mapH = $('#theMap').height();
		bottomBind = (mapH - winH)*-1;
		$('#dimmer').css({'top': -winH});
		if(zoomIn){
			$('#mmSite').css({'height':$(window).height()/10,'width':$(window).width()/10});
		} else {
			$('#mmSite').css({'height':$(window).height()/5,'width':$(window).width()/5});
		};

	};
	function repMap(){
		var mapLeft = $('#mapGroup').css('left').substring(0, $('#mapGroup').css('left').length-2);
		var mapBottom = $('#mapGroup').css('top').substring(0, $('#mapGroup').css('top').length-2);
		if(mapLeft>0){
			$('#mapGroup').stop().animate({left:'0px'},{duration:1500,queue: false},'swing');
		} else if(mapLeft<rightBind){
			$('#mapGroup').stop().animate({left:rightBind+'px'},{duration:1500,queue: false},'swing');
		};
		if(mapBottom>0){
			$('#mapGroup').animate({top:'0px'},{duration:1500,queue: false},'swing');
		} else if(mapBottom<bottomBind){
			$('#mapGroup').animate({top:bottomBind+'px'},{duration:1500,queue: false},'swing');
		};
		setTimeout(minPos,1500);
	};
// Draggable Functions - end
	getDimensions();
// Sliding Nav - start
	function xToBurgie(){
		document.getElementById('click').play();
		$('nav').animate({top: '-30px', right: '-170px', height: '80px'}, 500, 'swing', function(){
			$('#close').stop().empty().append('<img src="images/burgie2.png">');
			$('#lists').stop().hide();
			//$('#close').css('-webkit-transform','rotate(90deg)'); 
			//$('#close').css('-moz-transform','rotate(90deg)');
			//$('#close').css('transform','rotate(90deg)');
		});
		$('#close').off('click').stop().on('click', burgieToX);	
	};
	function burgieToX(){
		document.getElementById('click').play();
		$('#lists').stop().show();
		$('nav').stop().animate({top: '0px', right: '0px', height: '380px'}, 1500, 'easeOutElastic', function(){
			$('#close').stop().empty().append('<img src="images/x2.png">');

			//$('#close').css('-webkit-transform','rotate(0deg)'); 
			//$('#close').css('-moz-transform','rotate(0deg)');
			//$('#close').css('transform','rotate(0deg)');
		});
		$('#close').off('click').stop().on('click', xToBurgie);	
	};
	$('#close').stop().on('click', xToBurgie);
// Sliding Nav - end
	$('#loc1, #site_1').on('click', function(){
		document.getElementById('click').play();
		$('#mapGroup').stop().animate({top: '-1604px', left: '-14px'}, 1000, 'swing', function(){
			$('.popup').animate({bottom: '-341px'}, 1000, 'swing');
			$('#pop1').stop().animate({bottom: '50px'}, 1000, 'easeOutElastic');
			$('#dimmer').animate({top: '0%'}, 1000, 'swing');

		});
	});
	$('#loc2, #site_2').on('click', function(){
		document.getElementById('click').play();
		$('#mapGroup').stop().animate({top: '-825px', left: '-321px'}, 1000, 'swing', function(){
			$('.popup').animate({bottom: '-341px'}, 1000, 'swing');
			$('#pop2').stop().animate({bottom: '50px'}, 1000, 'easeOutElastic');
			$('#dimmer').animate({top: '0%'}, 1000, 'swing');
		});
	});
	$('#loc3, #site_3').on('click', function(){
		document.getElementById('click').play();
		$('#mapGroup').stop().animate({top: '-389px', left: '-0px'}, 1000, 'swing', function(){
			$('.popup').animate({bottom: '-341px'}, 1000, 'swing');
			$('#pop3').stop().animate({bottom: '50px'}, 1000, 'easeOutElastic');
			$('#dimmer').animate({top: '0%'}, 1000, 'swing');
		});
	});
	$('#loc4, #site_4').on('click', function(){
		document.getElementById('click').play();
		$('#mapGroup').stop().animate({top: '-251px', left: '-206px'}, 1000, 'swing', function(){
			$('.popup').animate({bottom: '-341px'}, 1000, 'swing');
			$('#pop4').stop().animate({bottom: '50px'}, 1000, 'easeOutElastic');
			$('#dimmer').animate({top: '0%'}, 1000, 'swing');
		});
	});
	$('#loc5, #site_5').on('click', function(){
		document.getElementById('click').play();
		$('#mapGroup').stop().animate({top: '-154px', left: '-0px'}, 1000, 'swing', function(){
			$('.popup').animate({bottom: '-341px'}, 1000, 'swing');
			$('#pop5').stop().animate({bottom: '50px'}, 1000, 'easeOutElastic');
			$('#dimmer').animate({top: '0%'}, 1000, 'swing');
		});
	});
	$('#loc6, #site_6').on('click', function(){
		document.getElementById('click').play();
		$('#mapGroup').stop().animate({top: '-909px', left: '-1213px'}, 1000, 'swing', function(){
			$('.popup').animate({bottom: '-341px'}, 1000, 'swing');
			$('#pop6').stop().animate({bottom: '50px'}, 1000, 'easeOutElastic');
			$('#dimmer').animate({top: '0%'}, 1000, 'swing');
		});
	});
	$('#loc7, #site_7').on('click', function(){
		document.getElementById('click').play();
		$('#mapGroup').stop().animate({top: '-282px', left: '-907px'}, 1000, 'swing', function(){
			$('.popup').animate({bottom: '-341px'}, 1000, 'swing');
			$('#pop7').stop().animate({bottom: '50px'}, 1000, 'easeOutElastic');
			$('#dimmer').animate({top: '0%'}, 1000, 'swing');
		});
	});
	$('#loc8, #site_8').on('click', function(){
		document.getElementById('click').play();
		$('#mapGroup').stop().animate({top: '-1589px', left: '-1412px'}, 1000, 'swing', function(){
			$('.popup').animate({bottom: '-341px'}, 1000, 'swing');
			$('#pop8').stop().animate({bottom: '50px'}, 1000, 'easeOutElastic');
			$('#dimmer').animate({top: '0%'}, 1000, 'swing');
		});
	});
	$('#loc9, #site_9').on('click', function(){
		document.getElementById('click').play();
		$('#mapGroup').stop().animate({top: '-2146px', left: '-367px'}, 1000, 'swing', function(){
			$('.popup').animate({bottom: '-341px'}, 1000, 'swing');
			$('#pop9').stop().animate({bottom: '50px'}, 1000, 'easeOutElastic');
			$('#dimmer').animate({top: '0%'}, 1000, 'swing');
		});
	});
	$('#loc10, #site_10').on('click', function(){
		document.getElementById('click').play();
		$('#mapGroup').stop().animate({top: '-2381px', left: '-0px'}, 1000, 'swing', function(){
			$('.popup').animate({bottom: '-341px'}, 1000, 'swing');
			$('#pop10').stop().animate({bottom: '50px'}, 1000, 'easeOutElastic');
			$('#dimmer').animate({top: '0%'}, 1000, 'swing');
		});
	});
	$('.popup, #dimmer').on('click', function(){
		document.getElementById('click').play();
		$('.popup').animate({bottom: '-400px'}, 1000, 'swing');
		$('#dimmer').animate({top: -$(window).height()}, 1000, 'swing');
	});
});
