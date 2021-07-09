let pageHeight = window.innerHeight;
$('.mouse').on('click', function(){ 
    $("html, body").animate({ scrollTop: pageHeight}, 1000);
});