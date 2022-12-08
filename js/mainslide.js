$(function(){
    var current = 0;
    var setIntervalId;

    $('#mainimg').on({
        mouseover : function(){
            clearInterval(setIntervalId);
        },
        mouseout : function() {
            timer();
        }

    })

    timer();

    function timer(){
        setIntervalId = setInterval(function(){
            var n = current + 1;
            if(n == 5){
                n = 0;
            }
    
            move(n);
        }, 5000);
    };

    function move(i){
        var currentEl = $('#view li').eq(current);
        var nextEl = $('#view li').eq(i);

        currentEl.css({left: '0%'}).animate({left: '-100%'});
        nextEl.css({left: '100%'}).animate({left: '0%'});
        current = i;
    };
});