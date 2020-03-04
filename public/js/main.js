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

// Плавный переход к ссылке
	if ($('.js-link-move').length) {
		$('body').on('click','.js-link-move', function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top - 50;
			$('body,html').animate({scrollTop: top}, 1000);

			// Проверка наличия анимации
			productAnim(1);
		});
	}

// Маска для телефона
	$.mask.definitions['~'] = "[+-]";
	$('.js-phone').mask("+7 (999) 999-9999");

// Вывод сообщения об успешной отправке в попапе
	$('.js-valid-form').each(function(){
		$(this).on('submit',function(e){
			$.fancybox.close();
			$.fancybox.open({
				src  : '#msg-success',
				type : 'inline',
				opts : {
					
				}
			});
			$(this)[0].reset();
			e.preventDefault();
		});
	});

// Стилизация выпадающего списка
	if ($('.js-select').length) {
		$('.js-select').select2({
			minimumResultsForSearch: Infinity,
			 placeholder: function(){
				$(this).attr('data-placeholder');
			},
		});
	}

// Табуляция
	if ($('.js-tabs-step').length) {
		$('.js-tabs-step-list').each(function(){
			$(this).find('.js-tabs-step-item:first').addClass("active");
		});

		$('.js-tabs-step-content').each(function(){
			$(this).find('.js-tabs-step-content-item:first').fadeIn();
		});

		$('.js-tabs-step-item').click(function(e) {
			e.preventDefault();
			var $parent = $(this).parents('.js-tabs-step');

			$parent.find('.js-tabs-step-content-item').hide();
			$parent.find('.js-tabs-step-item').removeClass('active');

			$(this).addClass("active");
			$parent.find('#' + $(this).attr('data-item')).fadeIn();
		});
	}
});