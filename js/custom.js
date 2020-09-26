(function ($) {
    'use strict'
	
	var sendMessageSuccess = '';
	
    i18n.init(
        {
            fallbackLng: false,
            useCookie: false
        },
        function (err, t) {
            modificarLang("en");

			
            $('.lang-item-option').find(".lang-lbl").click(function () {
                var lang = $(this).attr("lang");
                modificarLang(lang);
            });
			

    });

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	function modificarLang(lng) {
	    i18n.setLng(lng, function (err, t) {
	        translate();
			sendMessageSuccess = t("sections.contact.sendMessageSuccess"); 
	    });

	    $("#currentlang").attr("lang", lng);
	}

	function translate() {
	    $("body").i18n();
	}
	
	jQuery(document).ready(function () {
		 jQuery('#contact-form').bind('submit',function(event) {
			jQuery("#preloader").fadeIn("slow");
			jQuery("#load").fadeIn("slow");
			
			event.preventDefault();
			  
			var url = "sendMessage.php";

			$.ajax({
				   type: "POST",
				   url: url,
				   data: $("#contact-form").serialize(),
				   complete: function(data)
				   {
					  jQuery("#preloader").fadeOut("slow");
					  jQuery("#load").fadeOut("slow");
					  toastr.success(sendMessageSuccess);
				   }
				 });
		 });
	});
	
	/* toastr options */
	toastr.options = {
	  "closeButton": true,
	  "positionClass": "toast-top-center",
	  "preventDuplicates": true,
	  "showDuration": "300",
	  "hideDuration": "1000",
	  "showEasing": "swing",
	  "hideEasing": "linear",
	  "showMethod": "fadeIn",
	  "hideMethod": "fadeOut"
	}
})(jQuery);
