$('document').ready(function() {
    
    resizeLogo();
    
    $(window).on('resize', function () {
        resizeLogo();
    });
    
    $(window).on('resize', function () {
        if (window.innerWidth > 766) {
            $('.navbar-collapse').collapse('hide');
        }
    });
    

    $('.navbar-collapse').on('hidden.bs.collapse', function () {
        console.log("collapsed");
        $("#social").removeClass("social-sm");
    });
    
    $('.navbar-toggle').on('click', function() {
         $("#social").addClass("social-sm");
    }); 
    

    $('#carouselHacked').carousel();

});

function resizeLogo() {
    if (window.innerWidth <= 1024) {
        console.log("<1024");
        $('#logo').removeClass("logo-lg").addClass("logo-sm");
    }
    else {
        console.log(">1024");
        $('#logo').removeClass("logo-sm").addClass("logo-lg"); 
    }
}
