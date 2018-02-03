 // 3. Show/hide menu when icon is clicked
    var menuItems = $('.page-menu');
    var menuIcon = $('.menu-icon,#menu-link');
    // Menu icon clicked
    menuIcon.on('click', function () {
        if (menuIcon.hasClass('menu-visible')) {
            menuIcon.removeClass('menu-visible');
        } else {
            menuIcon.addClass('menu-visible');
        }
        if (menuItems.hasClass('menu-visible')) {
            menuItems.removeClass('menu-visible');
        } else {
            menuItems.addClass('menu-visible');
        }
        return false;
    });
    // Hide menu after a menu item clicked
    $(".page-menu a").on('click',function(){
        if (menuItems.hasClass('menu-visible')) {
            menuIcon.removeClass('menu-visible');
            menuItems.removeClass('menu-visible');
        }
        return true;
    });