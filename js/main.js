
$(document).ready(function(){
	"use strict";

	var window_width = $(window).width(),
	window_height = window.innerHeight,
	header_height = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);


     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });

    $('.active-project-carousel').owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin: 100,
        nav: true,
        navText: ['<i class="fa fa-caret-left""></i>', '<i class="fa fa-caret-right""></i>']
    });
    // $('.active-banner-slider').owlCarousel({
    //     items:1,
    //     loop:true,
    //     margin: 100,
    //     dots: true
    // });
    // Add smooth scrolling to Menu links

    // $(document).ready(function() {
    //     $('#mc_embed_signup').find('form').ajaxChimp();
    // });
    // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message

        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: 'mail.php', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    alert.html(data).fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.attr("style", "display: none !important");; // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });
 });
