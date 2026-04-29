
$(function(){
    $.getScript("https://static.toastoven.net/toast/resources/js/toast-gnb.js", function() {
        var gnbFooterParams = {
            showSiteMap: false
        }
        toast.getSessionWithCountry();
        toast.drawGnbFooter(gnbFooterParams);
        var $j = jQuery.noConflict(true);
        $j(document).off();
    });

});
