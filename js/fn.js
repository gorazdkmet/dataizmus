/****** Variables ******/

    var win = jQuery(window),
		viewportWidth = win.width(),
		viewportHeight = win.height(),
		smallscreen = viewportWidth <= 750 ? true : false, // prvotné zistenie šírky viewportu
		menu = $('.mainbar__navbar'),
        ulMenu = menu.find('.navbar__list'),
        outMain = $('.main'),
        inMain = $('.main__content'),
        headline = $('.webtitle__headline a'),
        headerHeadline = $('.header__link'),
        tagline = $('.webtitle__tagline a'),
		searchBoxwrapper = $('.mainbar__searchbar'),
        searchBox = $('.searchbar__form'),
        searchCloseIcon = $('.searchbar__closeicon'),
        searchInput = $('.searchbar__input'),
        searchLink = $('.header__search'),
        searchLinkDown = $('.footer__links .search__link'),
        arrows = $('.arrow'),
		horBars = $('.bar__icon'),
		originalheightBars = horBars.height(),
        author = $('.story__author--hover'),
		storyHeadline = $('.story__headline');
		current = menu.find('.navbar__link--selected').attr('href'),
        used = [current], 	// vložím si do poľa id aktuálnej načítanej galérie
		once = true, // aby animácia search baru prebehla len raz
		origHoverText = undefined; // zachovania originálnych slov pri hovery

/****** Objects ******/

    /* Ajax request object */

    var ajax = {
            url: null,
            unset: null,
            reqMenu: function(href) {
                this.url = href;
                var req = $.ajax({
                            method: 'GET',
                            url: this.url,
                            dataType: 'html'
                            }).promise();

                req.done( function(data) {

                            var newArticle = $(data).find('.main__content');
                            newArticle.prependTo(outMain);
                            newArticle.siblings().hide();

                            $('img').on('load', function() { newArticle.show() });

                            });
                req.fail( function() { alert('Dáta zo servera sa nenačítali správne!'); });
                req.always( function() { console.log('Prebehol request na server!'); });
                this.url = this.unset
            }
    };

/****** Functions ******/

    /* Animácia Search Baru Slide */

    function searchBarAnimation(direction) {

        if (direction == 'up') {

            searchBox.addClass('slide-up').removeClass('slide-down');
            ulMenu.addClass('slide-down').removeClass('slide');

        } else if (direction == 'down') {

            searchBox.removeClass('slide-up').addClass('slide-down');
            ulMenu.removeClass('slide-down').addClass('slide');
            searchInput.focus();

        } else {

            searchBox.toggleClass('slide-down');
            ulMenu.toggleClass('slide-down');
            searchBox.toggleClass('slide-up');
            ulMenu.toggleClass('slide');

            if (searchBox.hasClass('slide-down'))
            {
                searchInput.focus()
            }
        }
    };

	/* Výmena tried pri mobilnej animácií Search Baru */

	function restorePositClasses(platform) {

		if (platform == 'mob') {

			searchBoxwrapper.removeClass('absolute');
			searchBox.removeClass('relative')

		} else if (platform == 'ntb') {

			searchBoxwrapper.addClass('absolute');
			searchBox.addClass('relative');

		} else;
	}

	function restoreSlides(platform) {

		if (ulMenu.hasClass('slide')) {

			ulMenu.removeClass('slide').addClass('slide-down');

		} else;

		if (platform == 'mob') {

			searchBox.hide().removeClass('slide-up').addClass('slide-down');

		} else if (platform == 'ntb') {

			searchBox.hide().addClass('slide-up').removeClass('slide-down').show();

			// aby searchbox neskákal cez menu najprv ho skryjem až potom pustím slide up a až potom ho znova zobrazím

			menu.show();

		} else;
	}

    /* Zmena označenia položky v hlavnom menu */

    function changeSelection(id) {

        var page = id + '.php';

        if (used.includes(page))
        {
            menu.find('.navbar__link--selected').removeClass('navbar__link--selected');
            menu.find("[href='"+page+"']").addClass('navbar__link--selected');

        } else return;
    };

    /* Function generates a random string  */

    function randString(n)
    {
        if (!n) { n = 5 }

        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-_.:;,"?§!)(=}{*&^~$#@≤<>\/|';

        for (var i=0; i < n; i++)
        {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    };

	// Horizontal and vertical window resize events

	(function () {

	    win.on('resize', function () {
	        var width = win.width(),
	            height = win.height();

	        if (width !== viewportWidth) {
	            win.trigger('hresize');
	        }
	        if (height !== viewportHeight) {
	            win.trigger('vresize');
	        }
	        viewportWidth = width;
	        viewportHeight = height;
	    });
	})();

	// Array to Randomize Characters in Words

	function randomizeWords(origWords) {

		var words = origWords.split(" "),
			newWords = [];

		words.forEach( randWords );

		function randWords(word) {
			var word = word.toString(10),
				num = word.length,
			newWord = randString(num);
			newWords.push(newWord);
		};

		var randWords = newWords.join(" ");
		return randWords;
	}
