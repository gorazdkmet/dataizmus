(function ($) {

<<<<<<< Updated upstream
    /* Ajax */
=======
<<<<<<< Updated upstream
    /* Ajax toto je master */
=======
    /* Ajax toto je development */
>>>>>>> Stashed changes
>>>>>>> Stashed changes

    if (current !== undefined) {  // podmienka, pre všetky ajax volania: ak prichádzame zo stránok, ktoré nemajú definovaný .selected (story.html/search.html...) nespustí sa ajax iba href atribút a linku

        menu.on('click', 'a', function (event) { event.preventDefault();

            var href = $(this).attr('href'),
                link = $(this),
                selected = menu.find('.navbar__link--selected');

                link.addClass('navbar__link--selected');
                link.parent().siblings().children().removeClass('navbar__link--selected');

                if (used.includes(href)) {

                    var article = $('#' + href.split(".", 1));
                    article.siblings().hide(); article.show();

                } else { ajax.reqMenu(href); used.push(href) }; // Zobrazený link / ID sa pridá do poľa aby sme mali evidenované, že ho už nemusíme žiadať zo servru.

				if (smallscreen) { menu.toggle('fast') } else return;
        });

    	/* Ajax Headline */

	    headline.on('click', function(event) { event.preventDefault();

	        // ak by bol otvorený alebo animovaný searchBox zatvorí ho

	        if (searchBox.is(':visible')) { searchBarAnimation('up') } else;

	        if (menu.find("[href='index.php']").is('.navbar__link--selected')) { return } else;

	        if (used.includes('index.php')) { $('#index').show().siblings().hide() }
	        else {  ajax.reqMenu('index.php'); used.push('index.php'); };

	        changeSelection('index');
	    });

    	/* Ajax Header-headline link */

	    headerHeadline.on('click', function(event) { event.preventDefault();

	        // ak by bol otvorený alebo animovaný searchBox zatvorí ho

	        if (searchBox.is(':visible')) { searchBarAnimation('up') } else;

	        if (menu.find("[href='we.php']").is('.navbar__link--selected')) { return } else;

	        if (used.includes('we.php')) { $('#we').show().siblings().hide() }
	        else {  ajax.reqMenu('we.php'); used.push('we.php'); };

	        changeSelection('we'); // musí ísť posledné, lebo využíva aktualizované pole used

	    });

    	/* Ajax Tagline */

	    tagline.on('click', function(event) { event.preventDefault();

	        if (menu.find("[href='method.php']").is('.navbar__link--selected')) { return } else;

	        if (used.includes('method.php')) { $('#method').show().siblings().hide(); }

	        else {  ajax.reqMenu('method.php'); used.push('method.php') }

	        changeSelection('method');
	    });

    	/* Ajax Author */

	    author.on('click', 'a', function(event) { event.preventDefault();

	        if (menu.find("[href='we.php']").is('.navbar__link--selected')) { return } else;

	        if (used.includes('we.php')) { $('#we').show().siblings().hide(); }

	        else {  ajax.reqMenu('we.php'); used.push('we.php') }

	        changeSelection('we'); // musí ísť posledné, lebo využíva aktualizované pole used
	    });

    } else; // koniec podmienky pre všetky ajax volania


    /* Submenu Stories Themes */

    outMain.on('click', '#themes .content__intro a', function (event) { event.preventDefault();

        var selectedID = $('.intro__link--selected').attr('id'),
            clickedID = $(this).attr('id'),
            choosenStory = $('#themes .' + clickedID);

        if ($(this).parent().is('.arrow')) { return } else; // pre prípad žeby klik šiel na šípku
        if (selectedID == clickedID) { return } else; // pre prípad žeby klik smeroval na ten istý link (zastavenie blikania)

        choosenStory.siblings().hide();
        choosenStory.fadeIn();

        $('.intro__text').removeClass('intro__text--selected');
        $(this).parent().addClass('intro__text--selected');

    });

	/* Random Characters on Hover  */

		outMain.on('mouseenter mouseleave','.story__author--hover, .story__headline', function(event) {

			if (event.type == 'mouseenter') {

				origHoverText = $(this).text();

				if (!smallscreen) {

					$(this).text(randomizeWords(origHoverText));

				};

			} else { $(this).text(origHoverText) };
		});

		headline.mouseenter( function() {

			origHoverText = $(this).text();

			if (!smallscreen) { $(this).text(randomizeWords(origHoverText)) };

		}).mouseleave( function() { $(this).text(origHoverText) });

    /* Smooth Scrolling Arrow Click */

    outMain.on('click', '.arrow a', function(event) { event.preventDefault();

        if ($(this).is('.intro-section .arrow a')) {

            var n = $(document).height();
            $('html, body').animate({ scrollTop: n }, 1500);

        } else {
            $('html, body').animate({ scrollTop: 0 }, 1000);
        }
    });

    /* Search Bar */

    searchLink.on('click', function(event) { event.preventDefault();

		console.log(window.pointerEvent);


		if (smallscreen) {

			menu.hide();

			if ( once == true ) { once = false; restoreSlides('mob') } else;

			restorePositClasses('mob');
			searchBox.toggle();

		}  else {

			restorePositClasses('ntb');
			searchBarAnimation();
		};
	});

    searchCloseIcon.on('click', function(event) { event.preventDefault();

        if (searchBox.is(':visible')) { searchBarAnimation('up') } else return;

    });

	$('.webtitle__tagline').on('tap', function(event) {
		console.log(event.originalEvent.pointerType);

		if (event.originalEvent.pointerType == 'mouse') return;
		$(this).css('color', 'blue');
	});

    /* Kliknutie na spodný search link */

    searchLinkDown.on('click', function(event) { event.preventDefault();

        $('html, body, document').animate({ scrollTop: 0 }, {duration: 1000, complete: function() {

            if (searchBox.hasClass('slide-up')) { searchBarAnimation('down') } else searchInput.focus();

        }})
    });

	/* Kliknutie na Horizonal Bars otvorí a zatvorí menu na mobiloch */

	horBars.on('click', function(event) { event.preventDefault();

		searchBox.hide();

		restorePositClasses('ntb');
		menu.stop(true,true).toggle('fast');

	});

	// Rieši zmenu šírky viewportu pomocou výšky Horizobral Bars Ikony (750px)

	win.on('hresize', function() {

		if ( horBars.height() < originalheightBars ) {
			originalheightBars  = horBars.height(); // musí ísť prvé
			smallscreen = false;

			console.log('Ikona práve zmizla');

			restorePositClasses('ntb');
			restoreSlides('ntb');

		} else if (horBars.height() > originalheightBars) {
			originalheightBars  = horBars.height(); // musí ísť prvé
			smallscreen = true;

			console.log('Ikona sa práve objavila');

			if (ulMenu.is(':visible')) {

				restorePositClasses('ntb'); menu.hide()

			} else {

				restorePositClasses('mob')

			};

			restoreSlides('mob');

		} else { return };
	});

})(jQuery);
