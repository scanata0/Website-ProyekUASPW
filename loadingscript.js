$(document).ready(function() {
    function animateLoading() {
        $('.garisloading').css('width', '0%');
        $('.garisloading').animate(
            { width: '100%' },
            {
                duration: 2000,
                step: function() {
                },
                complete: function() {
                    $('.welcometext').css({"visibility":"visible"});
                    $('.garisloading').css({"visibility":"hidden"});
                    $('.loadingcontainer').css({"visibility":"hidden"});
                    window.location.href = 'index.html';
                }
            }
        );
    }
    animateLoading();
});

