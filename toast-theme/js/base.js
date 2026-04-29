var FUNCS ={
	refresh_rnb: function() {
		var max_height = $(window).height() - 148 - 80;
		$('#list__rnb').css('max-height', (max_height) + 'px');
		$('#list__rnb').height('auto');
		$('#list__rnb').height(Math.min(max_height, $('#list__rnb').height()));
	}
}
$(function() {
	$.ajaxSetup({
		cache: true
	});
	$('.content-container a').each(function(){
		if(this.href.indexOf(location.hostname) == -1) {
			$(this).attr({
				target: "_blank"
			});
		}
	});
	FUNCS.refresh_rnb();
	hljs.initHighlightingOnLoad();
	$('#list__rnb').stick_in_parent({
		offset_top: 148,
		inner_scrolling: false,
		spacer: false
	}).on("sticky_kit:unbottom", function(e) {
		$('#list__rnb').css('max-height', 'auto');
	}).on("sticky_kit:bottom", function(e) {
		FUNCS.refresh_rnb();
	});
    
	$(window).resize(function() {
		FUNCS.refresh_rnb();
		$(document.body).trigger('sticky_kit:recalc');
	});
}).on('shown.bs.collapse', '#gnb .collapse', function (e) {
	var scroll_bottom = $(document).scrollTop() + $(window).height();
	var shown_menu_bottom = $("#gnb .collapse.show:visible").last().offset().top + $("#gnb .collapse.show:visible").last().height();
	var top = shown_menu_bottom - scroll_bottom + 200;
	if (shown_menu_bottom > scroll_bottom) {
		$('html, body').animate({
			scrollTop: ($(document).scrollTop()+ top) + 'px'
		}, 500);
	}
});