
$(function(){
var width = 720;
var animationSpeed = 1000;
var pause = 3000;
var currentSLide = 1;
var $slider = $('#slider');
var $slideContainer = $slider.find('.slides');
var $slides = $slideContainer.find('.slide');
var interval;


function preview(){
	$slideContainer.animate({'margin-left':'+='+width}, function(){
			currentSLide--;
			if(currentSLide == 0){
				currentSLide = 5;
				$slideContainer.css('margin-left', -2880);
				}; 
			});
		}
function next(){
	$slideContainer.animate({'margin-left':'-='+width},function(){
		currentSLide++;
		if(currentSLide == $slides.length){
				currentSLide = 1;
				$slideContainer.css('margin-left', 0);
			}; 	
	});
}
function startSlider(){
interval = setInterval(function(){
	$slideContainer.animate({'margin-left':'-='+width}, animationSpeed,function(){
		currentSLide++;
			if(currentSLide == $slides.length){
				currentSLide = 1;
				$slideContainer.css('margin-left', 0);
			};
	});
}, pause);
}

function stopSlider(){
	clearInterval(interval);
  return false;
}

$('#play').on('click', function(){
	$(this).css("color",'green').hide();
	$('.pause').css("color","black");
	startSlider();
});

$('#stop').on('click', function(){
	$(this).css("color","red");
	$('.play').css("color","black").show();
	stopSlider();
});

$('#prev').on('click', preview).on('mouseenter', stopSlider).on('mouseleave', startSlider);
$('#next').on('click', next).on('mouseenter', stopSlider).on('mouseleave', startSlider);
$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);


startSlider();

});