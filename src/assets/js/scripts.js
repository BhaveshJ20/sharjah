$(document).ready(function() {
	/* MENU TOGGLE */
	$(".navbar-toggler").on("click", function(){
		$("#mobileMenu").addClass("active");
		$("body").addClass("overflow-hidden");
	});

	$(".header-overlay-close").on("click", function(){
		$("#mobileMenu").removeClass("active");
		$("body").removeClass("overflow-hidden");
		$(".header-level-submenu").removeClass("active");
	});

	/* NICE SCROLL */
	if($.fn.niceScroll) {
		$(".header-overlay .header-overlay-wrap").niceScroll();
	}

	/* PAGE MENU ACTIVE */
	var url = window.location.href;
	var activePage = url;
	$('.header .navbar-nav-menu li a').each(function () {
		var linkPage = this.href;

		if (activePage == linkPage) {
			$(this).addClass("active");
		}
	});

	/* FIX ISSUE FOR PAGE SPEED */
	document.addEventListener('wheel', function(e){
		//e.preventDefault();   
	}, {passive: false});
	document.addEventListener("mousewheel", { passive: false });
});

$(window).on("load resize",function(e){
	if ($(window).width() <= 991) {
		/* OVERLAY MENU MOBILE */
		$('.header-level-one .header-level-submenu > a').click(function (e) {
			e.preventDefault();
			$(this).parent().addClass('active');
		});
		$('.header-menu-back a').click(function (e) {
			e.preventDefault();
			$(this).parents('.header-level-submenu').removeClass('active');
		});
	};

	//$('body').css('padding-top', $('.header').outerHeight() + 'px');
});

/* Equal Size */

(function () {
	equalHeight(false);
})();

$(window).on("load resize", function (e) {
	equalHeight(true);
});

function equalHeight(resize) {
	var elements = document.getElementsByClassName("card-media-kit"),
	allHeights = [],
	i = 0;
	if(resize === true){
		for(i = 0; i < elements.length; i++){
			elements[i].style.height = 'auto';
		}
	}
	for(i = 0; i < elements.length; i++){
		var elementHeight = elements[i].clientHeight;
		allHeights.push(elementHeight);
	}
	for(i = 0; i < elements.length; i++){
		elements[i].style.height = Math.max.apply( Math, allHeights) + 'px';
		if(resize === false){
			elements[i].className = elements[i].className + " show";
		}
	}
}