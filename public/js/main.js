$(document).ready(function () {
// Слайдер отзывов
	$('.js-review-slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1
	});

// Раскрывающийся блок
	$(".js-unwrap-block").on('click','.js-unwrap-head',function(event){
		event.preventDefault();
		$(this).parent().toggleClass("opened");
		if($(this).parent().hasClass("opened")){
			$(this).parent().children(".js-unwrap-content").slideDown(400);
		}
		else{
			$(this).parent().children(".js-unwrap-content").slideUp(400);
		}
	});
	
	// //---------- Маска для телефона -------------
	// $.mask.definitions['~'] = "[+-]";
	// $("#phone").mask("(999) 999-9999");

});