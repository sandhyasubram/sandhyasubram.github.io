let pageHeight = window.innerHeight;
setTimeout(function(){ 
    $("html, body").animate({ scrollTop: pageHeight}, 1200); 
}, 10000);
$('.mouse').on('click', function(){ 
    $("html, body").animate({ scrollTop: pageHeight}, 1000);
});