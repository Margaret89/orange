$(document).ready(function () {
// Слайдер отзывов
	$('.js-review-slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				arrows: false
			}
		},
		]
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

// Создание мобильного меню
	var arrMobileMenu = [];
	$('.js-add-mm').each(function(){
		var indexItem = $(this).attr('data-order');
		arrMobileMenu[indexItem] = $(this);
	});

	for (var i = 0; i < arrMobileMenu.length; i++) {
		$(arrMobileMenu[i]).clone().appendTo('.js-mobile-menu-content');
	}
	
// Открыть/Закрыть мобильное меню
	$('.js-open-menu').click(function(){
		$('.js-shadow').addClass('is-visible');
		$('.js-mobile-menu').addClass('open');
		$('.js-body').addClass('no-scroll');
	});

	$('.js-close-menu').click(function(){
		 closeCatMenu();
	});

	$('.js-shadow').click(function(){
		closeCatMenu();
	});

	function closeCatMenu() {
		$('.js-shadow').removeClass('is-visible');
		$('.js-mobile-menu').removeClass('open');
		$('.js-body').removeClass('no-scroll');
	}

// Перемещение мобильного меню
	var indentMenu = 0;
	var levelMenu = 0;
	var titleMobileMenu = $('.js-menu-back').text();

	$('.js-top-menu-arr').on("click", function(event){
		event.preventDefault();
		var $curItem = $(this).parent('.js-top-menu-link');
		var curItemText = $(this).siblings('.js-top-menu-text').text();
		var $subMenu = $curItem.siblings('.js-top-menu-sub');
		indentMenu = indentMenu - 100;
		levelMenu++;

		$subMenu.addClass('active');
		$('.js-menu-back').addClass('active');
		$('.js-menu-back').text(curItemText);

		$('.js-mobile-menu-content').css('transform','translateX('+indentMenu+'%)');
	});

	$('.js-menu-back').on("click", function(event){
		if ($(this).hasClass('active')) {
			indentMenu = indentMenu + 100;
			levelMenu--;

			if (levelMenu == 0) {
				$('.js-menu-back').text(titleMobileMenu);
				$('.js-menu-back').removeClass('active');
			}

			$('.js-top-menu-sub').removeClass('active');

			$('.js-mobile-menu-content').css('transform','translateX('+indentMenu+'%)');
		}
	});
});