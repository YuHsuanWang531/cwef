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
	if ( width < 769 ) {
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
	$('a.trend-more-btn').click(function() {
//		$(this).slideUp();
//		$('.trend-mobile-none').slideDown();
//		$('.note').addClass('active');
		$(this).slideUp();
		$('.trend-mobile-none').addClass('trend-mobile-none-active');
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
		} else {
			$("#mainNav").removeClass("navbar-shrink");
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
	if (!location.href.match('review|report|download|ppt')) {
			new WOW().init();
		
		// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: 155
	});
		$('.popup-with-zoom-anim').magnificPopup({
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in'
		});
		var speakerNo;
		$(".popup-with-zoom-anim").click(function () {
			speakerNo = $(this).attr('id');
			for (var i = 0; i < data.length; i++) {
				if (speakerNo == data[i]["speakerNo"]) {
					$("#relate").hide();
					$("#speakerImg").attr("src", "img/speaker/" + "" + data[i]["speakerImg"] + ".jpg");
					$("#speakerImg").attr("alt", "" + data[i]["speakerName"] + "");
					$("#speakerName").text("" + data[i]["speakerName"] + "");
					$("#speakerInfo").html("" + data[i]["speakerInfo"] + "");
					$("#speakerIntro").html("" + data[i]["speakerIntro"] + "");
					if (data[i]["relateTitle"] !== "") {
						$("#relate").show();
						$("#relateLink").text("" + data[i]["relateTitle"] + "");
						$("#relateLink").attr("href", "" + data[i]["relateLink"] + "");
					}
				}
			}
			return false;
		});
		if ( width > 768 ) {
			$('.slide-desktop').owlCarousel({
				animateOut: 'fadeOut',
				margin: 0,
				loop: true,
				nav: true,
				dots: false,
				responsiveClass: true,
				autoplay: true,
				autoplayTimeout: 4000,
				autoplayHoverPause: true,
				smartSpeed: 600,
				items: 1,
				animateIn: "zoomIn",
	
			});
		} else {
			$('.slide-mobile').owlCarousel({
				animateOut: 'fadeOut',
				margin: 0,
				loop: true,
				nav: true,
				dots: false,
				responsiveClass: true,
				autoplay: true,
				autoplayTimeout: 4000,
				autoplayHoverPause: true,
				smartSpeed: 600,
				items: 1
			});
		}
	}
	$('.inputBox i').click(function(){
		$(this).siblings('input').attr('type',
			$(this).siblings('input').attr('type')==='password'?'text':'password'
		);
		$(this).toggleClass('see');
	});
	function countdown() {
		var now = new Date();
		var eventDate = new Date(2019, 0, 14);
		var currentTime = now.getTime();
		var evenTime = eventDate.getTime();
		var remTime = evenTime - currentTime;
		var sec = Math.floor(remTime / 1000);
		var min = Math.floor(sec / 60);
		var hur = Math.floor(min / 60);
		var day = Math.floor(hur / 24);
			hur %= 24;
			min %= 60;
			sec %= 60;
		hur = (hur < 10) ? "0" + hur : hur;
		min = (min < 10) ? "0" + min : min;
		sec = (sec < 10) ? "0" + sec : sec;
		$('#sec').text(sec);
		$('#min').text(min);
		$('#hours').text(hur);
		$('#day').text(day);
		setTimeout(countdown, 1000);
	}
	countdown();
	

	
//nav

	if ( width >= 769 ){
		
		$("#dropdown1").hover(
			function(){
				$("#dropdownList1").stop(true,true).slideToggle(300);
		});
		
		$("#dropdown2").hover(
		function(){
			$("#dropdownList2").stop(true,true).slideToggle(300);
		});

	
	} else {
		
		$("#dropdown1").on('click',
		function(){
			$("#dropdownList1").stop(true,true).slideToggle(300);
		});
		
		$("#dropdown2").on('click',
			function(){
				$("#dropdownList2").stop(true,true).slideToggle(300);
		});
		
	}

//購票
		$(".bottom-bar").each(function(){
		
		var $window = $(window),
//			$header = $('.visual .text'),
			$header = $(this),
			
			headerOffsetTop = $header.offset().top;
		
		
		$window.on("scroll",function(){
			
			if($window.scrollTop() > headerOffsetTop){
				$(".bottom-bar").addClass("bar-active");
			} else {
				$(".bottom-bar").removeClass("bar-active");
			}			
			
		});

		
	});
 		
	

	

});