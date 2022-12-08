$(function(){
    $('#header_b .sub').hide();
        let i = true;

    $('#header_b_in .nav li').mouseenter(function(){
        if(i == true){
            i = false;
            $('#header_b .sub').show().css({height: 0}).animate({height: '350px'});
        };
    });

    $('#header_b').mouseleave(function(){
        i = true;
        $('#header_b .sub').show().css({height: '350px'}).animate({height: 0});
    });

    $('#header_b_in .nav li').hover(
        function(){
            $(this).find('a').addClass('on');
        },
        function(){
            $(this).find('a').removeClass('on');
        }
    )
});