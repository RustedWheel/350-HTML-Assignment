var previousScroll = 0,
    headerOrgOffset = $('#header').height();

$('#header-wrap').height($('#header').height());

$(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > headerOrgOffset) {
        if (currentScroll > previousScroll) {
            $('#header-wrap').slideUp();
        } else {
            $('#header-wrap').slideDown();
        }
    } 
    previousScroll = currentScroll;
});

jQuery("document").ready(function($){
var pos = $('.nav-container').offset().top;
var nav = $('.nav-container');

$(window).scroll(function () {
	if ($(this).scrollTop() > pos) {
		nav.addClass("f-nav");
	} else {
		nav.removeClass("f-nav");
	}
	});
});