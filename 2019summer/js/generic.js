$(function(){
	"use strict";
	// Start of use strict
	$('a.page-scroll[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - 150)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});
	// Closes responsive menu when a scroll trigger link is clicked
	var width = $(window).width();
	if ( width < 769 ){
		$('.page-scroll').click(function() {
			$('.navbarDiv').slideUp();
			$('.wrapper-menu').removeClass('open');
		});
		$('.wrapper-menu').click(function() {
			$('.navbarDiv').slideToggle();
		});
	}
	$('a.more').click(function() {
		$(this).slideUp();
		$('.moreDisplay').slideDown();
		$('.note').addClass('active');
	});
	if ( width >= 769 ){
		var containerWidth = $('.container').width();
		var btnLeft = ($(window).width() - containerWidth ) /2 ;
		$('#btnTop').css({'right':btnLeft});
	}
	var btnTopSpeed = 200;
	$(window).scroll(function(){
		$(window).scroll(function(){
			var scrollTop = $(document).scrollTop();
			if ( width >= 769 ){
				var windowH = $(window).height() - 130;
			} else {
				var windowH = $(window).height() - 80;
			}
			$('#btnTop').stop();
			$('#btnTop').animate({
				'top' : scrollTop + windowH + 'px'
			},{queue:true,duration:500});
			if(scrollTop > 200){
				$('#btnTop a').fadeIn(btnTopSpeed);
			}else if(scrollTop < 200){
				$('#btnTop a').fadeOut(btnTopSpeed);
			};
		});
	});
	// Collapse Navbar
	var navbarCollapse = function() {
		if ($("#mainNav").offset().top > 100) {
			$("#mainNav").addClass("navbar-shrink");
			$(".navbar-brand img").attr("src", "img/cwef-logo.svg");
		} else {
			$("#mainNav").removeClass("navbar-shrink");
			$(".navbar-brand img").attr("src", "img/cwef-logo-w.svg");
		}
	};

	var wrapperMenu = document.querySelector('.wrapper-menu');
	wrapperMenu.addEventListener('click', function(){
		wrapperMenu.classList.toggle('open');  
	})

	// Collapse now if page is not at top
	navbarCollapse();

	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse);

	$('.inputBox i').click(function(){
		$(this).siblings('input').attr('type',
			$(this).siblings('input').attr('type')==='password'?'text':'password'
		);
		$(this).toggleClass('see');
	});
});