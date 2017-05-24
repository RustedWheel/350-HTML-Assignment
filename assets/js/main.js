/*   $(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
         $(".sidebar em").text("Up"); 
        $(".header").show();
    } else {
         $(".sidebar em").text("Down"); 
        $(".header").hide();
    }
    this.previousTop = currentTop;
});  */

/* var previousScroll = 0,
    headerOrgOffset = $(".header").height();

$(".header-wrap").height($(".header").height());

$(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > headerOrgOffset) {
        if (currentScroll > previousScroll) {
            $(".header-wrap").slideUp();
        } else {
            $(".header-wrap").slideDown();
        }
    } 
    previousScroll = currentScroll;
}); */

/* function change_tab(el){
	caller = $(el)

	caller.parent().find(".tab-controls").removeClass("active")
	caller.addClass('active')

	tab_ref = caller.attr('data-ref')
	tab_group = caller.parent().attr('data-tabref')

	console.log(tab_ref)
	console.log(tab_group)

	$("#" + tab_group + " .active-tab").removeClass("active-tab")
	$("#" + tab_group + " #" + tab_ref).addClass("active-tab")
} */


/*  $(window).bind('scroll', function() {
     if ($(window).scrollTop() > 100) {
         $(".header-wrap").hide();
     }
     else {
         $(".header-wrap").show();
     }
}); */

/* $(window).scroll(function() {
  if ($(document).scrollTop() > 5) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
}); */

/* $(function(){
    $('#header_nav').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('#header_nav').data('size') == 'big')
        {
            $('#header_nav').data('size','small');
            $('#header_nav').stop().animate({
                height:'40px'
            },600);
        }
    }
    else
    {
        if($('#header_nav').data('size') == 'small')
        {
            $('#header_nav').data('size','big');
            $('#header_nav').stop().animate({
                height:'100px'
            },600);
        }  
    }
}); */

 jQuery("document").ready(function($){
	
	var nav = $('.nav-container');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 120) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});
 
});