$(function(){
    $(".desktop").click(function () {
        $("#wrapper").css({'height': '100vh', 'width': '100vw', 'margin': 'auto'});
    });
});

$(function(){
    $(".tablet").click(function () {
        $("#wrapper").css({'border': 'solid 1px #000', 'height': '50vh', 'width': '50vw', 'overflow': 'auto', 'top': '0', 'right': '0', 'bottom': '0', 'left': '0', 'margin': 'auto', 'margin-top': '10%'});
    });
});

$(function(){
    $(".phone").click(function () {
        $("#wrapper").css({'border': 'solid 1px #000', 'height': '45vh', 'width': '15vw', 'overflow': 'auto',  'top': '0', 'right': '0', 'bottom': '0', 'left': '0', 'margin': 'auto', 'margin-top': '10%'});
    });
});
// $(function(){
//            $('.button').click(function(){
//                $('.block').toggleClass('active');
//            });


           // alert('JS is working');

           // $("p").click(function () {
           //   $(this).css({'font-size': '36px', 'color': 'green'});
           // });

           // $(".desktop").click(function () {
           //   $(.wrapper ).css({'height': '100vh', 'width': '100vw'});
           // });
           //
           // $(".tablet").click(function () {
           //  $(.wrapper ).css({'height': '60vh', 'width': '60vw'});
           // });
           //
           // $(".phone").click(function () {
           //  $(.wrapper ).css({'height': '30vh', 'width': '30vw'});
           // });
