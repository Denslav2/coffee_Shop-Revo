  /*TABS MENU*/
; (function () {
	'use strict';

	class Tabsmenu {
		constructor(tabmenu) {
			this.tabmenu = tabmenu;
			// блоки с контентом для табов
			this.blocks = this.tabmenu.nextElementSibling.querySelectorAll('.tab-container > div');
			// коллекция табов
			this.tabs = this.tabmenu.querySelectorAll('li');
			// вешаем обработчик событий на родительский элемент табов
			this.tabmenu.addEventListener('click', this.swithTab.bind(this));
		}

		swithTab(e) {
			let target = e.target;
			// проверяем, по какому именно элементу таб меню был сделан клик
			// если клик был сделан не по вкладке, которая формируется тэгом &lt;li&gt;,
			// то прекращаем работу функции и переходим в ожидание следующего клика
			if (target.tagName !== 'LI') return;
			// индекс вкладки по которой был сделан клик
			const i = [].indexOf.call(this.tabs, target);
			// делаем вкладки неактивными
			for (let tab of this.tabs) {
				tab.classList.remove('active');
			}
			// делаем активной вкладку, по которой был сделан клик
			this.tabs[i].classList.add('active');
			this.switchBloks(i);
		}

		switchBloks(i) {
			// делаем все блоки с контентом невидимыми
			for (let block of this.blocks) {
				block.hidden = true;
			}
			// делаем видимым блок контента, относящийся к активной вкладке
			this.blocks[i].hidden = false;
		}
	}

	// коллекция всех tab menu на странице
	const tabsmenu = document.querySelectorAll('.tabsmenu');
	if (!tabsmenu) return;
	// перебираем полученную коллекцию
	for (let menu of tabsmenu) {
		// создаём экземпляр tab menu
		const tab = new Tabsmenu(menu);
	}
})();

/*SLIDER*/
$('.guarantee__slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<div class="guarantee__slider-btn-prew"><img src="img/btn-prew.png" alt=""></div>',
  nextArrow: '<div class="guarantee__slider-btn-next"><img src="img/btn-next.png" alt=""></div>',
  responsive: [
	{
	  breakpoint: 1050,
	  settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
	  }
	},	
  ]
});

$('.combo__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  appendArrows: $('.combo__slider-btn_box'),
  prevArrow: '<div class="combo__slider-btn_next"><img src="img/btn-prew.png" alt=""></div>',
  nextArrow: '<div class="combo__slider-btn_prew"><img src="img/btn-next.png" alt=""></div>',
  responsive: [
	{
	  breakpoint: 1230,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 1,
	  }
	},	
	{
		breakpoint: 850,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		}
	  },	
  ]
});

 /*GALLERY*/
$('.coffee__galerie').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
        verticalFit: true,
        /*titleSrc: function(item) {
            return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
        }*/
    },
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 500, // don't foget to change the duration also in CSS
        opener: function(element) {
            return element.find('img');
        }
    }
    
});
