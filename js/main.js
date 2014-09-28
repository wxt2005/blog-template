$(function() {
    var $header = $('header');
    var $mainNav = $header.find('.main-nav');
    var $mainDropButtons = $mainNav.find('.drop').children('a');
    var $miniNav = $header.find('.mini-nav');
    var $mminiDropButtons = $miniNav.find('.drop').children('a');
    var $dropMenus = $mainNav.find('.drop-menu');
    console.log($mainDropButtons);

    $mainDropButtons.click(function(event) {
        var $menu = $(this).next();
        if ($menu.hasClass('active')) {
            $menu.removeClass('active');
        } else {
            $dropMenus.removeClass('active');
            $menu.addClass('active');
        }
        return false;
    });


    $(document).click(function(event) {
        $dropMenus.removeClass('active');
    });
});